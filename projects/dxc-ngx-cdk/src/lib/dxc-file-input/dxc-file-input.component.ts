import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { v4 as uuidv4 } from "uuid";
import { FileData } from "./interfaces/file.interface";
import { FilesService } from "./services/files.services";
import { NgChanges } from "../typings/ng-onchange";
import { FileInputProperties, Space, Spacing } from "./dxc-file-input.types";
import { FileMetaData } from './model/file.metadata';
import { ChunkMetaData } from './model/chunk.metadata';
import { IFileUploadRequest, EventType } from "./model/fileuploadrequest.data";
import { RemoveFileData } from "./model/removefiledata";

@Component({
  selector: "dxc-file-input",
  templateUrl: "./dxc-file-input.component.html",
  providers: [CssUtils, FilesService],
})
export class DxcFileInputComponent implements OnChanges, OnInit {
  @ViewChild("fileInput", { static: false }) fileInputNative: ElementRef;
  @HostBinding("class") className;
  /**
   * Name attribute.
   */
  @Input() public name: string = "";
  /**
   * Available modes of the component.
   */
  @Input() public mode: "file" | "filedrop" | "dropzone" = "file";
  /**
   * Text to be placed above the component.
   */
  @Input() public label: string = "";
  /**
   * Text to be placed inside the button.
   */
  @Input() public buttonLabel: string;
  /**
   * Helper text to be placed above the component.
   */
  @Input() public helperText: string = "";
  /**
   * An array of files representing the selected files.
   */
  @Input() public value: FileData[];
  /**
   * The file types that the component accepts. Its value must be one of all the possible values of the HTML file input's accept attribute.
   */
  @Input() public accept: string;
  /**
   * If true, the component allows multiple file items and will show all of them. If false, only one file will be shown,
   * and if there is already one file selected and a new one is chosen, it will be replaced by the new selected one.
   */
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = true;
  /**
   * If true, if the file is an image, a preview of it will be shown. If not, an icon refering to the file type will be shown.
   */
  @Input()
  get showPreview(): boolean {
    return this._showPreview;
  }
  set showPreview(value: boolean) {
    this._showPreview = coerceBooleanProperty(value);
  }
  private _showPreview = false;
  /**
   * If true, the component will be disabled.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  /**
   * The minimum file size (in bytes) allowed. If the size of the file does not comply the minSize, the file will have an error.
   */
  @Input()
  get minSize(): number {
    return this._minSize;
  }
  set minSize(value: number) {
    this._minSize = coerceNumberProperty(value);
  }
  private _minSize;
  /**
   * The maximum file size (in bytes) allowed. If the size of the file does not comply the maxSize, the file will have an error.
   */
  @Input()
  get maxSize(): number {
    return this._maxSize;
  }
  set maxSize(value: number) {
    this._maxSize = coerceNumberProperty(value);
  }
  private _maxSize;
    /**
   * The maximum file count (in number) allowed. If the count of the files does not comply the maxFileCount, the file will have an error.
   */
    @Input()
    get maxFileCount(): number {
      return this._maxFileCount;
    }
    set maxFileCount(value: number) {
      this._maxFileCount = coerceNumberProperty(value);
    }
    private _maxFileCount;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() public margin: Space | Spacing;
  /**
   * Value of the tabindex attribute.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  /**
   * request object gets the value from APP and pass to halstack library.
   */
  @Input('resources') resources: { [key: string]: { description: string, type: string } };
  /**
   * request object gets the value from APP and pass to halstack library.
   */
  @Input('requests') requests: IFileUploadRequest = null;
  private _tabIndexValue = 0;
  hasShowError: boolean = false;
  /**
   * This event will emit when the user selects or drops a file. The file or list of files will be sent as a parameter.
   */
  @Output() callbackFile = new EventEmitter<FileData[]>();

  defaultInputs = new BehaviorSubject<FileInputProperties>({
    name: null,
    mode: "file",
    label: null,
    buttonLabel: null,
    helperText: null,
    accept: null,
    multiple: true,
    showPreview: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0,
    value: null,
    maxSize: null,
    minSize: null,
    maxFileCount: null,
  });

  id: string;
  files: Array<FileData> = [];
  hoveringWithFile: boolean = false;
  filesLoaded: boolean = false;
  numberFiles: number = 0;
  hasMultipleFiles: boolean = false;
  hasSingleFile: boolean = false;
  hasErrorSingleFile: boolean = false;
  hasValue: boolean = false;
  globalChunkCount: number = 0;
  globalActualChunkCount: number = 0;
  fileDataUpload: FileMetaData;
  GUID: string;
  fileEventType: EventType = EventType.PREUPLOAD;
  chunkResult: boolean;
  data: Array<FileData> = [];
  postResp: Array<string> = [];
  uniqueFileNameIndex: number = 0;
  uploadChunkSize: number = 1000000;
  isDuplicateUpload: boolean;
  isMinMaxFile: boolean = false;
  
  constructor(private utils: CssUtils, private service: FilesService) {
    this.service.files.subscribe(({ files, event }) => {
      if (event !== "reset" && (files.length || this.hasValue)) {
        this.data = files;
        this.hasShowError = this.isErrorShow();
        this.hasMultipleFiles = this.isMultipleFilesPrintables();
        this.hasSingleFile = this.isSingleFilesPrintables();
        this.callbackFile.emit(files);
      }
    });
  }

  ngOnInit() {
    this.id = this.id || uuidv4();
    this.value ? (this.hasValue = true) : (this.hasValue = false);
    this.hasShowError = this.isErrorShow();
    this.hasMultipleFiles = this.isMultipleFilesPrintables();
    this.hasSingleFile = this.isSingleFilesPrintables();
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (!this.buttonLabel) {
      this.buttonLabel =
        this.mode === "file"
          ? this.multiple
            ? "Select files"
            : "Select file"
          : "Select";
    }
  }

  ngOnChanges(changes: NgChanges<DxcFileInputComponent>): void {
    if (this.fileInputNative) {
      this.multiple
        ? this.fileInputNative.nativeElement.setAttribute("multiple", true)
        : this.fileInputNative.nativeElement.removeAttribute("multiple");
    }
    if (this.value?.length > 0) {
      const arr: FileData[] = [];
      this.service.files.next({ files: arr, event: "reset" });
      this.value.forEach((file) => {
        if (!file.error) {
          file.error = this.checkFileSize(file.data);
        }
        this.service.addFile(file);
      });
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterViewInit(): void {
    if (this.fileInputNative) {
      this.multiple
        ? this.fileInputNative.nativeElement.setAttribute("multiple", true)
        : this.fileInputNative.nativeElement.removeAttribute("multiple");
    }
  }

  checkFileSize(file: File) {
    if (file.size < this.minSize) {
      return (this.resources.minSize.description + "-" + this.minSize+"kb");
    }
    if (file.size > this.maxSize) {
      return (this.resources.maxSize.description + "-" + this.maxSize+"kb");
    }
    if (this.data.length > this.maxFileCount) {
      return (this.resources.maxFileCount.description + " - " + this.maxFileCount);
    }
    if (this.isDuplicateUpload) {
      return (this.resources.duplicateFileUpload.description);
    }
    //return null;
  }

  /**
   * File drop y drop zone
   * @param event
   */
  dragOver(event) {
    event.preventDefault();
    this.hoveringWithFile = true;
  }

  /**
   * File drop y drop zone
   * @param event
   */
  dragLeave(event) {
    event.preventDefault();
    this.hoveringWithFile = false;
  }

  /**
   * File drop y drop zone
   * @param event
   */
  drop(event) {
    event.preventDefault();
    this.hoveringWithFile = false;
    if (this.callbackFile.observers?.length > 0 && this.hasValue) {
      if (!this.multiple) {
        this.service.emptyArrayFiles();
      }
      this.getPreviewsFiles(event.dataTransfer.files);
      this.processFiles(event.dataTransfer.files);
    }
  }

  /**
   * Common function for both file modes.
   * @param event
   */
  onFileInput(event) {
    if (this.callbackFile.observers?.length > 0 && this.hasValue) {
      if (!this.multiple) {
        this.service.emptyArrayFiles();
      }
      this.getPreviewsFiles(event.target.files);
      this.isDuplicateUpload = false;
      for(let i=0; i < this.data.length;i++)
      {
        if(event.target.files[0].name == this.data[i].data.name)
        {
          this.isDuplicateUpload = true;
          this.data[i].error = this.checkFileSize(event.target.files[0]);
        }
      }
      if(!this.isDuplicateUpload)
      {
        this.processFiles(event.target.files);
      }
      event.target.value = "";
    }
  }

    /**
   * File upload logic to send file as chunk and receive response.
   * @param event
   */
    processFiles(event) {
    this.files=event;
    this.isDuplicateUpload = false;
    this.fileEventType = EventType.UPLOAD;
    for(let i=0;i<event.length;i++)
    {
      this.uploadFile(event[i])
    }
  }

  uploadFile(eventFiles) {
    // if(eventFiles.size < this.uploadChunkSize)
    // {
    //   this.uploadWholeDoc(eventFiles);
    // }
    // else{
    //   this.uploadChunkDoc(eventFiles);
    // }
    if (eventFiles.size < this.minSize || eventFiles.size > this.maxSize || this.data.length >= this.maxFileCount)
    {
      this.isMinMaxFile = true;
      this.uniqueFileNameIndex++;
      return;
    }
    this.uploadChunkDoc(eventFiles);
}
uploadChunkDoc(file) {
  let lastChunksize = 0;
  this.fileDataUpload = new FileMetaData();
  this.GUID = uuidv4();
  this.globalActualChunkCount = 0;
  this.globalChunkCount = file.size % this.uploadChunkSize == 0 ? file.size / this.uploadChunkSize : Math.floor(file.size / this.uploadChunkSize) + 1;

  this.readFile(file, lastChunksize, this.uploadtoAPI.bind(this));
 }

 uploadtoAPI(filedata,file, lastChunksize, result) {
  lastChunksize = lastChunksize + this.uploadChunkSize;
  this.chunkResult = result;
  if(result) {
    //Add you logic what do you want after reading the file
      this.uploads(filedata);
      this.readFile(file, lastChunksize, this.uploadtoAPI.bind(this));

  }
  else if(this.globalActualChunkCount == this.globalChunkCount)
  {
    setTimeout(() => {
      this.uploadComplete(this.fileDataUpload).then(resp => { 
        //this.data[0].postResponse.push(resp);
        this.postResp = resp;
        this.data[this.uniqueFileNameIndex].data.uniqueFileName = resp;
        this.fileEventType = EventType.POSTUPLOAD;
        //let data = this.getPreview(file);
        this.data[0].eventType = this.fileEventType;
        this.uniqueFileNameIndex++;
        this.callbackFile.emit(this.data);
        });
    }, 3000);
    //this.uploadcomplete(this.fileDataUpload);
  }
 }

 readFile(file,lastChunksize: number, callback) {
  let filedata = new ChunkMetaData();
  filedata.fileName = this.globalActualChunkCount + "$^$" + this.GUID + "$^$" + file.name;
   filedata.fileSize = file.size;
   filedata.fileType = file.type;
   filedata.chunkNumber = this.globalActualChunkCount;
   this.fileDataUpload.GUID = this.GUID;
  var chunk = file.slice(lastChunksize,lastChunksize+1000000);
  if(chunk.size !=0) {
    let fileReader = new FileReader();
    fileReader.onloadend= (result)=>{
      // Store base64 encoded representation of file
    filedata.fileAsBase64 = fileReader.result.toString();
    this.globalActualChunkCount++;
    this.fileDataUpload.fileNames.push(filedata.fileName);
    return callback(filedata,file,lastChunksize,fileReader.result)
    }
    fileReader.readAsDataURL(chunk);
  }else {
   return callback(filedata,file,lastChunksize,false);
  }
 }
 uploadWholeDoc(file) {
  let theFile = file.data;
  let filedata = new ChunkMetaData();
   // Set File Information
   filedata.fileName = file.name;
   filedata.fileSize = file.size;
   filedata.fileType = file.type;
   let reader = new FileReader();
    // Setup onload event for reader
  reader.onload = () => {
    // Store base64 encoded representation of file
    filedata.fileAsBase64 = reader.result.toString();
    
    // POST to server
    this.uploads(filedata);
  }
 }
 private async uploads(theFile: ChunkMetaData) 
 {
   const response = await fetch(this.requests.uploadRequest.url, {
     method: 'POST',
     body: JSON.stringify(theFile),
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json',
       clientId: '0',
       'Authorization': 'bearer '+ sessionStorage.session
     }
  });
  if (!response.ok) {
   throw new Error(`Error! status: ${response.status}`);
 }
}
  private async uploadComplete(theFiles: FileMetaData) {
    const response = await fetch(this.requests.uploadCompleteRequest.url, {
      method: 'POST',
      body: JSON.stringify(theFiles),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        clientId: '0',
        'Authorization': 'bearer '+ sessionStorage.session
      }
   });
   if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  // const result: CreateUserResponse
   const result = (await response.json());
 
   return result;
  }

  public async removefromAPI(theFiles: RemoveFileData) {
    if(!this.isMinMaxFile){
      this.uniqueFileNameIndex--;
    }
    const response = await fetch(this.requests.removeRequest.url, {
      method: 'POST',
      body: JSON.stringify(theFiles),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        clientId: '0',
        'Authorization': 'bearer '+ sessionStorage.session
      }
   });
   if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
   }
  }

  /**
   * Common function for both file modes.
   * @param eventFiles
   */
  getPreviewsFiles(eventFiles) {
    this.numberFiles = eventFiles?.length;
    Array.from(eventFiles).map((file) => {
      this.getPreview(file);
    });
  }

  /**
   * Common function for both file modes.
   * @param file
   */
  getPreview(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (!file.type.includes("image") || file.type.includes("image/svg")) {
        let fileToAdd: FileData = {
          data: file,
          image: null,
          error: this.checkFileSize(file),
          eventType: this.fileEventType,
          postResponse: this.postResp
        };
        this.service.addFile(fileToAdd);
      } else {
        let fileToAdd: FileData = {
          data: file,
          image: event.target["result"],
          error: this.checkFileSize(file),
          eventType: this.fileEventType,
          postResponse: this.postResp
        };
        this.service.addFile(fileToAdd);
      }
    };
  }

  private isMultipleFilesPrintables(isSingle = false) {
    return isSingle
      ? this.value?.length > 0 && !this.disabled && !this.multiple
      : this.value?.length > 0 && !this.disabled && this.multiple;
  }

  private isSingleFilesPrintables() {
    return this.mode === "file" && this.value?.length === 1 && !this.multiple;
  }

  private isErrorShow = (): boolean =>
    this.value?.length === 1 &&
    this.mode === "file" &&
    this.value[0]?.error &&
    !this.multiple &&
    !this.disabled;

  /**
   * Define the type of file component. Just for styling
   * @param inputs
   * @returns
   */
  getModeStyle(inputs: FileInputProperties) {
    if (inputs.mode === "filedrop") {
      return this.getFileDropStyle();
    } else if (inputs.mode === "dropzone") {
      return this.getDropZoneStyle();
    } else {
      return this.getFileStyle();
    }
  }

  /**
   * Just for file mode.
   * @param inputs
   * @returns
   */
  getFileStyle() {
    return css`
      .fileInputContainer {
        flex-direction: ${this.value?.length > 1 || this.multiple
          ? "column"
          : "row"};
      }
    `;
  }

  /**
   * Just for drop zone.
   * @param inputs
   * @returns
   */
  getDropZoneStyle() {
    return css`
      .fileInputContainer {
        flex-direction: column;
        .dragDropArea {
          height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .dropLabel {
            margin-top: 8px;
          }
        }
      }
    `;
  }
  /**
   * Just for drop zone.
   * @param inputs
   * @returns
   */
  getFileDropStyle() {
    return css`
      .fileInputContainer {
        flex-direction: column;
        .dragDropArea {
          padding: 3px;
          height: 48px;
          box-sizing: border-box;
          .dropLabel {
            margin-left: 12px;
          }
        }
      }
    `;
  }

  /**
   * Common functionality for styling
   * @param inputs
   * @returns
   */
  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.getModeStyle(inputs)}
      width: fit-content;
      display: flex;
      flex-direction: column;
      ${inputs.disabled ? "cursor: not-allowed;" : ""}
      .fileInputContainer {
        display: flex;
        dxc-button {
          width: fit-content;
        }
        input {
          visibility: hidden;
          width: 0px;
          height: 0px;
        }
        .dragDropArea {
          width: 320px;
          box-sizing: border-box;
          background: #ffffff 0% 0% no-repeat padding-box;
          border: var(--fileInput-dropBorderThickness)
            var(--fileInput-dropBorderStyle)
            ${!inputs.disabled
              ? "var(--fileInput-dropBorderColor)"
              : "var(--fileInput-disabledDropBorderColor)"};
          border-radius: var(--fileInput-dropBorderRadius);
          .dropLabel {
            text-align: left;
            letter-spacing: 0.49px;
            color: ${!inputs.disabled
              ? "var(--fileInput-dropLabelFontColor)"
              : "var(--fileInput-disabledDropLabelFontColor)"};
            font-family: var(--fileInput-dropLabelFontFamily);
            font-size: var(--fileInput-dropLabelFontSize);
            font-weight: var(--fileInput-dropLabelFontWeight);
          }
          &.hovering {
            ${!inputs.disabled
              ? "border: 2px solid var(--fileInput-focusDropBorderColor); background: var(--fileInput-dragoverDropBackgroundColor) 0% 0% no-repeat padding-box;"
              : ""}
          }
        }
        .fileContainer {
          display: flex;
          flex-direction: column;
        }
      }
      .label {
        text-align: left;
        letter-spacing: 0px;
        color: ${!inputs.disabled
          ? "var(--fileInput-labelFontColor)"
          : "var(--fileInput-disabledLabelFontColor)"};
        font-family: var(--fileInput-labelFontFamily);
        font-size: var(--fileInput-labelFontSize);
        font-weight: var(--fileInput-labelFontWeight);
        line-height: var(--fileInput-labelLineHeight);
      }
      .helperText {
        margin-bottom: 4px;
        text-align: left;
        letter-spacing: 0px;
        color: ${!inputs.disabled
          ? "var(--fileInput-helperTextFontColor)"
          : "var(--fileInput-disabledHelperTextFontColor)"};
        font-family: var(--fileInput-helperTextFontFamily);
        font-size: var(--fileInput-helperTextFontSize);
        font-weight: var(--fileInput-helperTextFontWeight);
        line-height: var(--fileInput-helperTextLineHeight);
      }
    `;
  }
}

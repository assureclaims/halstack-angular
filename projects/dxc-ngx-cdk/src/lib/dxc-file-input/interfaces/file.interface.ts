import { EventType } from "../model/fileuploadrequest.data";
export interface FileData{
    data: FileInfo;
    error: string;
    image: string | ArrayBuffer;
    eventType: EventType;
    postResponse: Array<string>;
}
export interface FileInfo extends File{
uniqueFileName: string;
}

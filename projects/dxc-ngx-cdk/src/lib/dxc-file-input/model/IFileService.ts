import { BehaviorSubject, Observable } from "rxjs";
import { FilesData, FileData } from "./file-info";
import { HttpEvent, HttpHeaders } from "@angular/common/http";

export interface IFileService {
  files: BehaviorSubject<FilesData>;
  add(file: FileData): void;
  remove(file: FileData): void;
  removeAll(): void;
  upload(
    url: string,
    formParams: any,
    headers: HttpHeaders
  ): Observable<HttpEvent<Object>>;
  uploadId(url: string, headers?: HttpHeaders): Observable<Object>;
}

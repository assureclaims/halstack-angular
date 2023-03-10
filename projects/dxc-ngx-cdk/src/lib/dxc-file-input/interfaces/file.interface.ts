import { EventType } from "../model/fileuploadrequest.data";
export interface FileData{
    data: File;
    error: string;
    image: string | ArrayBuffer;
    eventType: EventType;
    postResponse: string
}

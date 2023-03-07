import { EventType } from "../model/fileuploadrequestdata";
export interface FileData{
    data: File;
    error: string;
    image: string | ArrayBuffer;
    eventtype: EventType;
    postresponse: string
}

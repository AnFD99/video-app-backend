/// <reference types="multer" />
import { IMediaResonse } from './media.interface';
export declare class MediaService {
    saveMedia(mediaFile: Express.Multer.File, folder?: string): Promise<IMediaResonse>;
}

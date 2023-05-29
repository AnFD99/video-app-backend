import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { UserModel } from 'src/user/user.model';
export interface VideoModel extends Base {
}
export declare class VideoModel extends TimeStamps {
    name: string;
    isPublished: boolean;
    views?: number;
    likes?: number;
    duration?: number;
    description: string;
    videoPath: string;
    thumbnailPath: string;
    user: Ref<UserModel>;
}

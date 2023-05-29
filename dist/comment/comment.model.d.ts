import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { UserModel } from 'src/user/user.model';
import { VideoModel } from 'src/video/video.model';
export interface CommentModel extends Base {
}
export declare class CommentModel extends TimeStamps {
    user: Ref<UserModel>;
    video: Ref<VideoModel>;
    message: string;
}

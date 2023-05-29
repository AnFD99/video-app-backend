import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    email: string;
    password: string;
    name: string;
    isVerified: boolean;
    subscribersCount?: number;
    description: string;
    location: string;
    bannerPath: string;
    avatarPath: string;
}

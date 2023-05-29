/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { VideoModel } from './video.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ObjectId } from 'mongoose';
import { VideoDto } from './video.dto';
export declare class VideoService {
    private readonly VideoModel;
    constructor(VideoModel: ModelType<VideoModel>);
    getVideoById(_id: string, isPublished?: boolean): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getMostPopularByViews(): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    getAllVideo(searchTerm?: string): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    getVideosByUserId(userId: ObjectId, isPrivate?: boolean): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    create(userId: ObjectId): Promise<import("mongoose").Types.ObjectId>;
    update(_id: string, dto: VideoDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    delete(_id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateViewsCount(_id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateReactionsCount(_id: string, type?: 'inc' | 'dec'): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, VideoModel> & VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
}

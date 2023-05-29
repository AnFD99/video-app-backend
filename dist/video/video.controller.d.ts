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
import { VideoService } from './video.service';
import { VideoDto } from './video.dto';
import { ObjectId } from 'mongoose';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    getVideoPrivate(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getVideoByUserId(userId: ObjectId): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    getPrivateVideoByUserId(_id: ObjectId): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    getMostPopular(): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    getAll(searchTerm?: string): Promise<Omit<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction, never>[]>;
    updateVideo(id: string, dto: VideoDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    createVideo(_id: ObjectId): Promise<import("mongoose").Types.ObjectId>;
    deleteVideo(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateViews(videoId: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateLikes(videoId: string, type: 'inc' | 'dec'): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getVideo(id: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("./video.model").VideoModel> & import("./video.model").VideoModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
}

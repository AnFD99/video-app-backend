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
import { CommentModel } from './comment.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ObjectId } from 'mongoose';
import { CommentDto } from './comment.dto';
export declare class CommentService {
    private readonly CommentModel;
    constructor(CommentModel: ModelType<CommentModel>);
    getCommentsByVideoId(videoId: ObjectId): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, CommentModel> & CommentModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    create(userId: ObjectId, dto: CommentDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, CommentModel> & CommentModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
}

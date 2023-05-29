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
import { ModelType } from '@typegoose/typegoose/lib/types';
import { UserModel } from './user.model';
import { UserDto } from './user.dto';
import { ObjectId } from 'mongoose';
export declare class UserService {
    private readonly UserModel;
    constructor(UserModel: ModelType<UserModel>);
    getUserWithVideoCount(_id: ObjectId): Promise<any>;
    getUserById(_id: ObjectId): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateProfile(_id: ObjectId, dto: UserDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getMostPopular(): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & UserModel & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
}

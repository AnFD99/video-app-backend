"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_model_1 = require("./user.model");
const bcryptjs_1 = require("bcryptjs");
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async getUserWithVideoCount(_id) {
        return this.UserModel.aggregate()
            .match({ _id })
            .lookup({
            from: 'Video',
            foreignField: 'user',
            localField: '_id',
            as: 'videos'
        })
            .addFields({
            videosCount: {
                $size: '$videos'
            }
        })
            .project({ password: 0, __v: 0, videos: 0 })
            .exec()
            .then((data) => data[0]);
    }
    async getUserById(_id) {
        const user = await this.UserModel.findById(_id, { password: 0, __v: 0 });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return user;
    }
    async updateProfile(_id, dto) {
        const user = await this.getUserById(_id);
        const isSameUser = await this.UserModel.findOne({ email: dto.email });
        if (isSameUser && String(_id) !== String(isSameUser._id)) {
            throw new common_1.NotFoundException('Email already exists');
        }
        if (dto.password) {
            const salt = await (0, bcryptjs_1.genSalt)(10);
            user.password = await (0, bcryptjs_1.hash)(dto.password, salt);
        }
        user.email = dto.email;
        user.name = dto.name;
        user.description = dto.description;
        user.location = dto.location;
        user.bannerPath = dto.bannerPath;
        user.avatarPath = dto.avatarPath;
        return await user.save();
    }
    async getMostPopular() {
        return this.UserModel.find({ subscribersCount: { $gt: 0 } }, { password: 0, __v: 0 })
            .sort({
            subscribersCount: -1
        })
            .exec();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const comment_model_1 = require("./comment.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let CommentService = class CommentService {
    constructor(CommentModel) {
        this.CommentModel = CommentModel;
    }
    async getCommentsByVideoId(videoId) {
        return this.CommentModel.find({ video: videoId }, { __v: 0 })
            .sort({
            createdAt: 'desc'
        })
            .exec();
    }
    async create(userId, dto) {
        return await this.CommentModel.create({
            message: dto.message,
            video: dto.videoId,
            user: userId
        });
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(comment_model_1.CommentModel)),
    __metadata("design:paramtypes", [Object])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map
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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const video_model_1 = require("./video.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let VideoService = class VideoService {
    constructor(VideoModel) {
        this.VideoModel = VideoModel;
    }
    async getVideoById(_id, isPublished = true) {
        const video = await this.VideoModel.findOne(isPublished ? { _id, isPublished: true } : { _id }, { __v: 0 });
        if (!video) {
            throw new common_1.NotFoundException('Video not found');
        }
        return video;
    }
    async getMostPopularByViews() {
        return this.VideoModel.find({ views: { $gt: 0 }, isPublished: true }, { __v: 0 })
            .populate('user', 'name avatarPath')
            .sort({
            views: -1
        })
            .exec();
    }
    async getAllVideo(searchTerm) {
        let options = {};
        if (searchTerm) {
            options = {
                $or: [
                    {
                        name: new RegExp(searchTerm, 'i')
                    }
                ]
            };
        }
        return this.VideoModel.find(Object.assign(Object.assign({}, options), { isPublished: true }), { __v: 0 })
            .sort({
            createdAt: 'desc'
        })
            .populate('user', 'name avatarPath')
            .exec();
    }
    async getVideosByUserId(userId, isPrivate = false) {
        const options = isPrivate
            ? { user: userId }
            : { user: userId, isPublished: true };
        return this.VideoModel.find(options, { __v: 0 })
            .sort({
            createdAt: 'desc'
        })
            .exec();
    }
    async create(userId) {
        const defaultValues = {
            name: '',
            description: '',
            user: String(userId),
            videoPath: '',
            thumbnailPath: ''
        };
        const video = await this.VideoModel.create(defaultValues);
        return video._id;
    }
    async update(_id, dto) {
        const updatedVideo = await this.VideoModel.findByIdAndUpdate(_id, dto, {
            new: true
        })
            .select({ __v: 0 })
            .exec();
        if (!updatedVideo) {
            throw new common_1.NotFoundException('Video not found');
        }
        return updatedVideo;
    }
    async delete(_id) {
        const deletedVideo = await this.VideoModel.findByIdAndDelete(_id);
        if (!deletedVideo) {
            throw new common_1.NotFoundException('Video not found');
        }
        return deletedVideo;
    }
    async updateViewsCount(_id) {
        const updatedView = await this.VideoModel.findByIdAndUpdate(_id, {
            $inc: { views: 1 }
        }, { new: true }).exec();
        if (!updatedView) {
            throw new common_1.NotFoundException('Video not found');
        }
        return updatedView;
    }
    async updateReactionsCount(_id, type) {
        if (!type) {
            throw new common_1.BadRequestException('Type must be valid');
        }
        const updatedVideo = await this.VideoModel.findByIdAndUpdate(_id, {
            $inc: { likes: type === 'inc' ? 1 : -1 }
        }, { new: true }).exec();
        if (!updatedVideo) {
            throw new common_1.NotFoundException('Video not found');
        }
        return updatedVideo;
    }
};
VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(video_model_1.VideoModel)),
    __metadata("design:paramtypes", [Object])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map
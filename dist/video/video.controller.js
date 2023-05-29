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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const video_dto_1 = require("./video.dto");
const user_decorator_1 = require("../user/decorators/user.decorator");
const id_validation_pipe_1 = require("../pipes/id.validation.pipe");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    async getVideoPrivate(id) {
        return this.videoService.getVideoById(id, false);
    }
    async getVideoByUserId(userId) {
        return this.videoService.getVideosByUserId(userId);
    }
    async getPrivateVideoByUserId(_id) {
        return this.videoService.getVideosByUserId(_id, true);
    }
    async getMostPopular() {
        return this.videoService.getMostPopularByViews();
    }
    async getAll(searchTerm) {
        return this.videoService.getAllVideo(searchTerm);
    }
    async updateVideo(id, dto) {
        return this.videoService.update(id, dto);
    }
    async createVideo(_id) {
        return this.videoService.create(_id);
    }
    async deleteVideo(id) {
        return this.videoService.delete(id);
    }
    async updateViews(videoId) {
        return this.videoService.updateViewsCount(videoId);
    }
    async updateLikes(videoId, type) {
        return this.videoService.updateReactionsCount(videoId, type);
    }
    async getVideo(id) {
        return this.videoService.getVideoById(id);
    }
};
__decorate([
    (0, common_1.Get)('private/:id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getVideoPrivate", null);
__decorate([
    (0, common_1.Get)('by-user/:userId'),
    __param(0, (0, common_1.Param)('userId', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getVideoByUserId", null);
__decorate([
    (0, common_1.Get)('private'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.CurrentUser)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getPrivateVideoByUserId", null);
__decorate([
    (0, common_1.Get)('most-popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getMostPopular", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getAll", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, video_dto_1.VideoDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateVideo", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.CurrentUser)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "createVideo", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "deleteVideo", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)('update-views/:videoId'),
    __param(0, (0, common_1.Param)('videoId', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateViews", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)('update-likes/:videoId'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('videoId', id_validation_pipe_1.IdValidationPipe)),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "updateLikes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getVideo", null);
VideoController = __decorate([
    (0, common_1.Controller)('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map
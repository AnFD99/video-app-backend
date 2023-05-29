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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const id_validation_pipe_1 = require("../pipes/id.validation.pipe");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const comment_dto_1 = require("./comment.dto");
const user_decorator_1 = require("../user/decorators/user.decorator");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async getCommentsByVideoId(videoId) {
        return this.commentService.getCommentsByVideoId(videoId);
    }
    async createComment(_id, dto) {
        return this.commentService.create(_id, dto);
    }
};
__decorate([
    (0, common_1.Get)('by-video/:videoId'),
    __param(0, (0, common_1.Param)('videoId', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentsByVideoId", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorator_1.CurrentUser)('_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, comment_dto_1.CommentDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map
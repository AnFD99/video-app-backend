"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModule = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
const video_controller_1 = require("./video.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const video_model_1 = require("./video.model");
const config_1 = require("@nestjs/config");
let VideoModule = class VideoModule {
};
VideoModule = __decorate([
    (0, common_1.Module)({
        controllers: [video_controller_1.VideoController],
        providers: [video_service_1.VideoService],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: video_model_1.VideoModel,
                    schemaOptions: {
                        collection: 'Video'
                    }
                }
            ]),
            config_1.ConfigModule
        ]
    })
], VideoModule);
exports.VideoModule = VideoModule;
//# sourceMappingURL=video.module.js.map
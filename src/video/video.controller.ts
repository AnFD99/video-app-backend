import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { VideoService } from './video.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { VideoDto } from './video.dto'
import { ObjectId } from 'mongoose'
import { CurrentUser } from 'src/user/decorators/user.decorator'
import { IdValidationPipe } from 'src/pipes/id.validation.pipe'

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('private/:id')
  @Auth()
  async getVideoPrivate(@Param('id', IdValidationPipe) id: string) {
    return this.videoService.getVideoById(id, false)
  }

  @Get('by-user/:userId')
  async getVideoByUserId(@Param('userId', IdValidationPipe) userId: ObjectId) {
    return this.videoService.getVideosByUserId(userId)
  }

  @Get('private')
  @Auth()
  async getPrivateVideoByUserId(@CurrentUser('_id') _id: ObjectId) {
    return this.videoService.getVideosByUserId(_id, true)
  }

  @Get('most-popular')
  async getMostPopular() {
    return this.videoService.getMostPopularByViews()
  }

  @Get()
  async getAll(@Query('searchTerm') searchTerm?: string) {
    return this.videoService.getAllVideo(searchTerm)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateVideo(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: VideoDto
  ) {
    return this.videoService.update(id, dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async createVideo(@CurrentUser('_id') _id: ObjectId) {
    return this.videoService.create(_id)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteVideo(@Param('id', IdValidationPipe) id: string) {
    return this.videoService.delete(id)
  }

  @HttpCode(200)
  @Put('update-views/:videoId')
  async updateViews(@Param('videoId', IdValidationPipe) videoId: string) {
    return this.videoService.updateViewsCount(videoId)
  }

  @HttpCode(200)
  @Put('update-likes/:videoId')
  @Auth()
  async updateLikes(
    @Param('videoId', IdValidationPipe) videoId: string,
    @Query('type') type: 'inc' | 'dec'
  ) {
    return this.videoService.updateReactionsCount(videoId, type)
  }

  @Get(':id')
  async getVideo(@Param('id', IdValidationPipe) id: string) {
    return this.videoService.getVideoById(id)
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { VideoModel } from './video.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { ObjectId } from 'mongoose'
import { VideoDto } from './video.dto'

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(VideoModel) private readonly VideoModel: ModelType<VideoModel>
  ) {}

  async getVideoById(_id: string, isPublished = true) {
    // Check Auth userId === video.userId
    const video = await this.VideoModel.findOne(
      isPublished ? { _id, isPublished: true } : { _id },
      { __v: 0 }
    )

    if (!video) {
      throw new NotFoundException('Video not found')
    }

    return video
  }

  async getMostPopularByViews() {
    return this.VideoModel.find(
      { views: { $gt: 0 }, isPublished: true },
      { __v: 0 }
    )
      .sort({
        subscribersCount: -1
      })
      .exec()
  }

  async getAllVideo(searchTerm?: string) {
    let options = {}

    if (searchTerm) {
      options = {
        $or: [
          {
            name: new RegExp(searchTerm, 'i')
          }
        ]
      }
    }

    return this.VideoModel.find({ ...options, isPublished: true }, { __v: 0 })
      .sort({
        createdAt: 'desc'
      })
      .exec()
  }

  async getVideosByUserId(userId: ObjectId, isPrivate = false) {
    const options = isPrivate
      ? { user: userId }
      : { user: userId, isPublished: true }

    return this.VideoModel.find(options, { __v: 0 })
      .sort({
        createdAt: 'desc'
      })
      .exec()
  }

  async create(userId: ObjectId) {
    const defaultValues: VideoDto = {
      name: '',
      description: '',
      user: String(userId),
      videoPath: '',
      thumbnailPath: ''
    }

    const video = await this.VideoModel.create(defaultValues)

    return video._id
  }

  async update(_id: string, dto: VideoDto) {
    const updatedVideo = await this.VideoModel.findByIdAndUpdate(_id, dto, {
      new: true
    })
      .select({ __v: 0 })
      .exec()

    if (!updatedVideo) {
      throw new NotFoundException('Video not found')
    }

    return updatedVideo
  }

  async delete(_id: string) {
    const deletedVideo = await this.VideoModel.findByIdAndDelete(_id)

    if (!deletedVideo) {
      throw new NotFoundException('Video not found')
    }

    return deletedVideo
  }

  async updateViewsCount(_id: string) {
    const updatedView = await this.VideoModel.findByIdAndUpdate(
      _id,
      {
        $inc: { views: 1 }
      },
      { new: true }
    ).exec()

    if (!updatedView) {
      throw new NotFoundException('Video not found')
    }

    return updatedView
  }

  async updateReactionsCount(_id: string, type?: 'inc' | 'dec') {
    if (!type) {
      throw new BadRequestException('Type must be valid')
    }

    const updatedVideo = await this.VideoModel.findByIdAndUpdate(
      _id,
      {
        $inc: { likes: type === 'inc' ? 1 : -1 }
      },
      { new: true }
    ).exec()

    if (!updatedVideo) {
      throw new NotFoundException('Video not found')
    }

    return updatedVideo
  }
}

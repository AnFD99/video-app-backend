import { Injectable } from '@nestjs/common'
import { CommentModel } from './comment.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { ObjectId } from 'mongoose'
import { CommentDto } from './comment.dto'

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(CommentModel)
    private readonly CommentModel: ModelType<CommentModel>
  ) {}

  async getCommntsByVideoId(videoId: ObjectId) {
    return this.CommentModel.find({ video: videoId }, { __v: 0 })
      .sort({
        createdAt: 'desc'
      })
      .exec()
  }

  async create(userId: ObjectId, dto: CommentDto) {
    return await this.CommentModel.create({ ...dto, user: userId })
  }
}

import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { UserModel } from './user.model'
import { UserDto } from './user.dto'
import { genSalt, hash } from 'bcryptjs'
import { ObjectId } from 'mongoose'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
  ) {}

  async getUserWithVideoCount(_id: ObjectId) {
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
      .then((data) => data[0])
  }

  async getUserById(_id: ObjectId) {
    const user = await this.UserModel.findById(_id, { password: 0, __v: 0 })

    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    return user
  }

  async updateProfile(_id: ObjectId, dto: UserDto) {
    const user = await this.getUserById(_id)
    const isSameUser = await this.UserModel.findOne({ email: dto.email })

    if (isSameUser && String(_id) !== String(isSameUser._id)) {
      throw new NotFoundException('Email already exists')
    }

    if (dto.password) {
      const salt = await genSalt(10)
      user.password = await hash(dto.password, salt)
    }

    user.email = dto.email
    user.name = dto.name
    user.description = dto.description
    user.location = dto.location
    user.bannerPath = dto.bannerPath
    user.avatarPath = dto.avatarPath

    return await user.save()
  }

  async getMostPopular() {
    return this.UserModel.find(
      { subscribersCount: { $gt: 0 } },
      { password: 0, __v: 0 }
    )
      .sort({
        subscribersCount: -1
      })
      .exec()
  }
}

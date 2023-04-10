import {
  Body,
  Controller,
  Get,
  HttpCode,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './user.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from './decorators/user.decorator'
import { ObjectId } from 'mongoose'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('_id') _id: ObjectId) {
    return this.userService.getUserById(_id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  @Auth()
  async updateProfile(@CurrentUser('_id') _id: ObjectId, @Body() dto: UserDto) {
    return this.userService.updateProfile(_id, dto)
  }

  @Get('most-popular')
  async getMostPopular() {
    return this.userService.getMostPopular()
  }
}

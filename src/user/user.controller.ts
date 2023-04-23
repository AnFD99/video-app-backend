import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './user.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from './decorators/user.decorator'
import { ObjectId } from 'mongoose'
import { IdValidationPipe } from 'src/pipes/id.validation.pipe'

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

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateUserAdmin(
    @Param('id', IdValidationPipe) id: ObjectId,
    @Body() dto: UserDto
  ) {
    return this.userService.updateProfile(id, dto)
  }

  @Get('most-popular')
  async getMostPopular() {
    return this.userService.getMostPopular()
  }
}

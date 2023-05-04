import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { CommentService } from './comment.service'
import { IdValidationPipe } from 'src/pipes/id.validation.pipe'
import { ObjectId } from 'mongoose'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CommentDto } from './comment.dto'
import { CurrentUser } from 'src/user/decorators/user.decorator'

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('by-video/:videoId')
  async getCommentsByVideoId(
    @Param('videoId', IdValidationPipe) videoId: ObjectId
  ) {
    return this.commentService.getCommentsByVideoId(videoId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async createComment(
    @CurrentUser('_id') _id: ObjectId,
    @Body() dto: CommentDto
  ) {
    return this.commentService.create(_id, dto)
  }
}

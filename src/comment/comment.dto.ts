import { IsString } from 'class-validator'

export class CommentDto {
  @IsString()
  videoId: string

  @IsString()
  message: string
}

import { IsString } from 'class-validator'

export class VideoDto {
  @IsString()
  name: string

  isPublished?: boolean

  @IsString()
  description: string

  @IsString()
  videoPath: string

  @IsString()
  thumbnailPath: string

  duration?: number

  user?: string
}

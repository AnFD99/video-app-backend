import { Injectable } from '@nestjs/common'
import { IMediaResonse } from './media.interface'
import { path } from 'app-root-path'
import * as fs from 'fs-extra'
// import getVideoDurationInSeconds from 'get-video-duration'

@Injectable()
export class MediaService {
  async saveMedia(
    mediaFile: Express.Multer.File,
    folder = 'default'
  ): Promise<IMediaResonse> {
    const uploadFolder = `${path}/uploads/${folder}`
    await fs.ensureDir(uploadFolder)

    await fs.writeFile(
      `${uploadFolder}/${mediaFile.originalname}`,
      mediaFile.buffer
    )

    // const stream = fs.createReadStream(uploadFolder)
    // const duration = getVideoDurationInSeconds(stream)

    return {
      url: `/uploads/${folder}/${mediaFile.originalname}`,
      name: mediaFile.originalname,
    }
  }
}

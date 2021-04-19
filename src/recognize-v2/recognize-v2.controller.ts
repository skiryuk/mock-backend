import {
  Controller,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('v2/recognize')
export class RecognizeV2Controller {
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  public async recognizeDocument(
    @UploadedFile() image: Express.Multer.File,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }
}

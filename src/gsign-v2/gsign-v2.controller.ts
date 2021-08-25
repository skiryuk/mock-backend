import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  IUpdateAoGraphicSessionRequest,
  IUpdateContractGraphicSessionRequest,
} from './gsign-v2.models';
import * as fs from 'fs';
import * as stream from 'stream';

@Controller('v2/gsign')
export class GsignV2Controller {
  @Post('session/:sessionId/image')
  @UseInterceptors(FileInterceptor('image'))
  public async saveSignatureContent(
    @Param('sessionId') sessionId: string,
    @UploadedFile() image: Express.Multer.File,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Put('session/:sessionId/contract/abonent')
  public async updateContractGraphicSession(
    @Param('sessionId') sessionId: string,
    @Body() req: IUpdateContractGraphicSessionRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Put('session/:sessionId/ao/abonent')
  public async updateAoGraphicSession(
    @Param('sessionId') sessionId: string,
    @Body() req: IUpdateAoGraphicSessionRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Get('session/:sessionId/contract/preview')
  public async loadContractPreview(
    @Param('sessionId') sessionId: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/contract_preview.pdf');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'application/pdf');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }

  @Get('session/:sessionId/ao/preview')
  public async loadAoPreview(
    @Param('sessionId') sessionId: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/ao_preview.pdf');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'application/pdf');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }

  @Get('session/:sessionId/link/qr-code')
  public async GetQrCode(
    @Param('sessionId') sessionId: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/qr-code.png');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'image/png');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }
}

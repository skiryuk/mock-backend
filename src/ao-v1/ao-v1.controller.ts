import { Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('v1/ao')
export class AoV1Controller {
  @Post('esim/email/:requestId')
  public async sendEsimQrCode(
    @Param('requestId') requestId: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }
}

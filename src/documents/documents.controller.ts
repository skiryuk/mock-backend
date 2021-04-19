import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import * as stream from 'stream';

@Controller('documents')
export class DocumentsController {
  @Get('GetSubscriberOperationToPrint')
  public async printAo(
    @Query('operationType') requestId: string,
    @Query('operationId') operationId: string,
    @Query('contractId') contractId: string,
    @Query('access_token') accessToken: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/ao_print.pdf');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'application/pdf');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }
}

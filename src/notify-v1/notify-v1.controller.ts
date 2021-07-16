import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import * as GET_NOTIFY_LIST_MOCK from './data/get-notify-list.json';

@Controller('v1/notify')
export class NotifyV1Controller {
  @Get('list')
  public async getNotifyList(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_NOTIFY_LIST_MOCK);
  }
}

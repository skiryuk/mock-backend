import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_SETTINGS_MOCK from './data/get-settings.json';

@Controller('settings')
export class SettingsController {
  @Get('global')
  public async getSettings(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_SETTINGS_MOCK);
  }
}

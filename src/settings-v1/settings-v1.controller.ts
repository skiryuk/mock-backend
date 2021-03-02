import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_TOGGLE_FEATURES_MOCK from './data/get-toggle-features.json';

@Controller('v1/settings')
export class SettingsV1Controller {
  @Get('features')
  public async getToggleFeatures(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_TOGGLE_FEATURES_MOCK);
  }
}

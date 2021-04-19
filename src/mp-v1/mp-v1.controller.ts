import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ICheckUpgradeRequest,
  ISendInstallDetailsRequest,
} from './mp-v1.models';
import * as CHECK_UPGRADE_APP_MOCK from './data/check-upgrade-app.json';

@Controller('v1/mp')
export class MpV1Controller {
  @Post('check')
  public async checkUpgradeApp(
    @Body() req: ICheckUpgradeRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CHECK_UPGRADE_APP_MOCK);
  }

  @Post('upgrade')
  public async sendInstallDetails(
    @Body() req: ISendInstallDetailsRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }
}

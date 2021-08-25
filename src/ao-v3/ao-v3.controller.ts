import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ICreateAbonentOperationRequest } from './ao-v3.models';
import { Response } from 'express';

import { ERequestOperationTypes } from '../config/config.enums';
import { ConfigService } from '../config/config.service';

import * as CREATE_AO_MOCK from './data/create-ao.json';
import * as GET_AO_BLOCKING_INFO_MOCK from './data/info/get-ao-blocking-info.json';
import * as GET_AO_DETALIZATION_INFO_MOCK from './data/info/get-ao-detalization-info.json';
import * as GET_AO_REJECTION_INFO_MOCK from './data/info/get-ao-rejection-info.json';
import * as GET_AO_REPLACE_ESIM_INFO_MOCK from './data/info/get-ao-esim-replace-info.json';
import * as GET_AO_REQ_INFO_MOCK from './data/get-ao-req-info.json';

@Controller('v3/ao')
export class AoV3Controller {
  constructor(private _configService: ConfigService) {}

  @Post('request')
  public async createAbonentOperation(
    @Body() req: ICreateAbonentOperationRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_AO_MOCK);
  }

  @Get('request/:requestId')
  public async getAbonentOperationInfoV3(
    @Param('requestId') requestId: string,
    @Res() res: Response,
  ) {
    switch (this._configService.config.ao.type) {
      case ERequestOperationTypes.BLOCKING:
        return res.status(HttpStatus.OK).json(GET_AO_BLOCKING_INFO_MOCK);
      case ERequestOperationTypes.DETALIZATION:
        return res.status(HttpStatus.OK).json(GET_AO_DETALIZATION_INFO_MOCK);
      case ERequestOperationTypes.REJECT_CONTRACT:
        return res.status(HttpStatus.OK).json(GET_AO_REJECTION_INFO_MOCK);
      case ERequestOperationTypes.PAID_REPLACE_ESIM:
        return res.status(HttpStatus.OK).json(GET_AO_REPLACE_ESIM_INFO_MOCK);
    }
    return res.status(HttpStatus.OK).json(GET_AO_REQ_INFO_MOCK);
  }

  @Put('request/:requestId')
  public async updateAO(
    @Param('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }
}

import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import * as GET_AO_REQ_INFO_MOCK from './data/get-ao-req-info.json';
import { ICheckAbonentOperationDataReq } from './abonent-operation-v2.models';

@Controller('v2/abonentOperation')
export class AbonentOperationV2Controller {
  @Get('abonentOperationRequest/:requestId')
  public async getAbonentOperationInfo(
    @Param('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_AO_REQ_INFO_MOCK);
  }

  @Post('CheckAbonentOperationData')
  public async checkAbonentOperationData(
    @Body() req: ICheckAbonentOperationDataReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }
}

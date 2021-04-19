import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  IAddBonusRequest,
  IGetBalanceDetailListRequest,
  IGetBonusOrderListRequest,
} from './snmp.models';

import * as GET_BONUS_LIST_MOCK from './data/get-bonus-list.json';
import * as GET_SNMP_USER_MOCK from './data/get-snmp-user.json';
import * as GET_BONUS_ORDER_LIST_MOCK from './data/get-bonus-order-list.json';
import * as GET_BONUS_DETAILS_MOCK from './data/get-bonus-details.json';

@Controller('snmp')
export class SnmpController {
  @Get('getBonusList')
  public async getBonusList(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_BONUS_LIST_MOCK);
  }

  @Get('getSnmpUser')
  public async getSnmpUser(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_SNMP_USER_MOCK);
  }

  @Post('getBonusOrderList')
  public async getBonusOrderList(
    @Body() req: IGetBonusOrderListRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_BONUS_ORDER_LIST_MOCK);
  }

  @Post('getBalanceDetailList')
  public async getBalanceDetailList(
    @Body() req: IGetBalanceDetailListRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_BONUS_DETAILS_MOCK);
  }

  @Post('addBonus')
  public async addBonus(@Body() req: IAddBonusRequest, @Res() res: Response) {
    return res.status(HttpStatus.OK).json();
  }
}

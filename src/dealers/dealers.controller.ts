import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { IDealerUpdateAdditionalInfo } from './dealers.models';

import * as GET_DEALER_INFO_MOCK from './data/get-info.json';

@Controller('dealer')
export class DealersController {
  @Post('updateDealerAdditionInfo')
  public async updateDealerAdditionInfo(
    @Body() req: IDealerUpdateAdditionalInfo,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }
  @Get('info')
  public async getDealerInfo(
    @Query('dealerCode') dealerCode: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_DEALER_INFO_MOCK);
  }
}

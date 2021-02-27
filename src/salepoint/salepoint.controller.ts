import { Controller, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import * as VISIBLE_SALEPOINTS_MOCK from './data/visible-salepoints.json';
import * as HIDDEN_SALEPOINTS_MOCK from './data/hidden-salepoints.json';

@Controller('salepoint')
export class SalepointController {
  @Post('GetSalesPointsHistory')
  public async authLogon(
    @Query('showHidden') showHidden: boolean,
    @Res() res: Response,
  ) {
    if (showHidden) {
      return res.status(HttpStatus.OK).json(HIDDEN_SALEPOINTS_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(VISIBLE_SALEPOINTS_MOCK);
    }
  }
}

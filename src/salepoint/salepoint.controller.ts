import { Controller, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import * as VISIBLE_SALEPOINTS_MOCK from './data/visible-salepoints.json';
import * as HIDDEN_SALEPOINTS_MOCK from './data/hidden-salepoints.json';
import * as GET_SALEPOINTS_ERROR_MOCK from './data/salepoint-err-unauth.json';

@Controller('salepoint')
export class SalepointController {
  @Post('GetSalesPointsHistory')
  public async authLogon(
    @Query('showHidden') showHidden: boolean,
    @Res() res: Response,
  ) {
    // return res.status(HttpStatus.UNAUTHORIZED).json(GET_SALEPOINTS_ERROR_MOCK);
    if (showHidden) {
      return res.status(HttpStatus.OK).json(HIDDEN_SALEPOINTS_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(VISIBLE_SALEPOINTS_MOCK);
    }
  }
}

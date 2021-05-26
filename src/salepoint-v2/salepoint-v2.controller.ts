import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ISalepointListRequest } from './salepoint-v2.models';

import * as SALEPOINTS_MOCK from './data/salepoints.json';

@Controller('v2/salepoint')
export class SalepointV2Controller {
  @Post('history')
  public async loadSalepoints(
    @Body() req: ISalepointListRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SALEPOINTS_MOCK);
  }
}

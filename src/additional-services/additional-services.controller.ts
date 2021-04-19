import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import * as GET_LOGGED_USER_FIN_SRV_MOCK from './data/get-logged-user-fin-srv.json';

@Controller('additionalServices')
export class AdditionalServicesController {
  @Get('getLoggedUserFinancialServices')
  public async getLoggedUserFinancialServices(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_LOGGED_USER_FIN_SRV_MOCK);
  }
}

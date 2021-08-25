import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_REG_POINT_BY_AUTH_MOCK from './data/reg-point-by-auth.json';
import * as GET_REG_POINT_BY_DEALER_CODE_MOCK from './data/reg-point-by-dealer-code.json';
import * as FIND_ALL_REG_POINTS_MOCK from './data/find-all-reg-points.json';

@Controller('registrationpoint')
export class RegistrationpointController {
  @Get('GetRegistrationPointByAuth')
  public async getDefaultContractRegPoint(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_REG_POINT_BY_AUTH_MOCK);
  }
  @Get('GetRegistrationPointByDealerCode')
  public async getRegistrationPointByDealerCode(
    @Query('dealerCode') dealerCode: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_REG_POINT_BY_DEALER_CODE_MOCK);
  }
  @Get('FindAllUserRegistrationPoints')
  public async findAllUserRegistrationPoints(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(FIND_ALL_REG_POINTS_MOCK);
  }
}

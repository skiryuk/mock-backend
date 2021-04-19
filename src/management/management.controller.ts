import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import * as GET_REG_POINTS_MOCK from './data/get-reg-points.json';
import * as GET_SALES_POINTS_MOCK from './data/get-sales-points.json';
import * as GET_SELLERS_BY_MANAGER_MOCK from './data/get-sellers-by-manager.json';

@Controller('management')
export class ManagementController {
  @Get('GetManagementRegistrationPoints')
  public async getManagementRegistrationPoints(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_REG_POINTS_MOCK);
  }
  @Get('GetManagementSalesPoints')
  public async getManagementSalesPoints(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_SALES_POINTS_MOCK);
  }
  @Get('GetSellersByManager')
  public async getSellersByManager(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_SELLERS_BY_MANAGER_MOCK);
  }
}

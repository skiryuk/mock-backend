import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { IFindSalepointRequest } from './salepoint.models';

import * as VISIBLE_SALEPOINTS_MOCK from './data/visible-salepoints.json';
import * as HIDDEN_SALEPOINTS_MOCK from './data/hidden-salepoints.json';
import * as GET_SALEPOINTS_ERROR_MOCK from './data/salepoint-err-unauth.json';
import * as GET_DEALERS_SALEPOINTS_MOCK from './data/get-dealer-salepoints.json';
import * as FIND_SALEPOINTS_BY_STREET_MOCK from './data/find-salepoints-by-street.json';
import * as FIND_SALEPOINTS_BY_CODE_MOCK from './data/find-salepoints-by-code.json';
import * as FIND_LOCATIONS_MOCK from './data/find-locations.json';
import * as FIND_STREETS_MOCK from './data/find-streets.json';

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
  @Get('GetDealersSalesPoints')
  public async getDealersSalesPoints(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_DEALERS_SALEPOINTS_MOCK);
  }
  @Post('findSalesPoints')
  public async findSalesPoints(
    @Body() req: IFindSalepointRequest,@Res() res: Response) {
    if (req.streetId) {
      return res.status(HttpStatus.OK).json(FIND_SALEPOINTS_BY_STREET_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(FIND_SALEPOINTS_BY_CODE_MOCK);
    }
  }
  @Get('findLocations')
  public async findLocations(
    @Query('substringFromBeginName') substringFromBeginName: string,@Res() res: Response) {
    return res.status(HttpStatus.OK).json(FIND_LOCATIONS_MOCK);
  }
  @Get('findStreets')
  public async findStreets(
    @Query('locationId') locationId: number,
    @Query('substringFromBeginName') substringFromBeginName: string,@Res() res: Response) {
    return res.status(HttpStatus.OK).json(FIND_STREETS_MOCK);
  }
}

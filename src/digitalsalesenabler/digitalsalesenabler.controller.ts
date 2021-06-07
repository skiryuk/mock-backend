import { Body, Controller, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  GetBeautifulNumbersPageRequest,
  GetDefCodesRequest,
} from './digitalsalesenabler.models';

import * as BN_LIST_MOCK from './data/bn-list.json';
import * as DEF_CODES_MOCK from './data/def-codes.json';
import * as SEARCH_NUMBER_MOCK from './data/search-number.json';

@Controller('digitalsalesenabler')
export class DigitalsalesenablerController {
  @Post('getBeautifulNumbersList')
  public async loadBeautifulNumbersList(
    @Body() req: GetBeautifulNumbersPageRequest,
    @Query('page') page: number,
    @Res() res: Response,
  ) {
    if (page < 4) {
      if (req.phoneNumber) {
        return res.status(HttpStatus.OK).json(SEARCH_NUMBER_MOCK);
      }
      return res.status(HttpStatus.OK).json(BN_LIST_MOCK);
    } else {
      return res.status(HttpStatus.OK).json([]);
    }
  }

  @Post('getDefCodesList')
  public async getDefCodesList(
    @Body() req: GetDefCodesRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(DEF_CODES_MOCK);
  }
}

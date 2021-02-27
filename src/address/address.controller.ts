import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as SUGGEST_REGIONS_MOCK from './data/suggest-regions.json';
import * as SUGGEST_DISTRICTS_MOCK from './data/suggest-districts.json';
import * as SUGGEST_PLACES_MOCK from './data/suggest-places.json';
import * as SUGGEST_STREETS_MOCK from './data/suggest-streets.json';
import * as SUGGEST_HOUSES_MOCK from './data/suggest-houses.json';

@Controller('v1/address')
export class AddressController {
  @Get('suggest-region')
  public async suggestRegions(
    @Query('substring') substring: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SUGGEST_REGIONS_MOCK);
  }

  @Get('suggest-district')
  public async suggestDistricts(
    @Query('substring') substring: string,
    @Query('regionId') regionId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SUGGEST_DISTRICTS_MOCK);
  }

  @Get('suggest-place')
  public async suggestPlaces(
    @Query('substring') substring: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SUGGEST_PLACES_MOCK);
  }

  @Get('suggest-street')
  public async suggestStreets(
    @Query('substring') substring: string,
    @Query('cityId') cityId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SUGGEST_STREETS_MOCK);
  }

  @Get('suggest-house')
  public async suggestHouses(
    @Query('substring') substring: string,
    @Query('streetId') streetId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SUGGEST_HOUSES_MOCK);
  }
}

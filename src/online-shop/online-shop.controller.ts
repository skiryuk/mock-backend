import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_ONLINE_SHOP_URL_MOCK from './data/get-online-shop-url.json';

@Controller('onlineshop')
export class OnlineShopController {
  @Get('getOnlineShopUrl')
  public async getOnlineShopUrl(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_ONLINE_SHOP_URL_MOCK);
  }
}

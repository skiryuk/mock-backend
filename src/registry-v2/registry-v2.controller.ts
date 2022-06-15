import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_PRODUCT_TYPES_MOCK from './data/get-product-types.json';

@Controller('v2/registry')
export class RegistryV2Controller {
  @Get('types')
  public async getProductTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_PRODUCT_TYPES_MOCK);
  }
}

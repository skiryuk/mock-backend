import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ICreateAbonentOperationRequest } from './ao-v4.models';
import { Response } from 'express';
import * as CREATE_AO_MOCK from './data/create-ao.json';

@Controller('v4/ao')
export class AoV4Controller {
  @Post('request')
  public async createAbonentOperation(
    @Body() req: ICreateAbonentOperationRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_AO_MOCK);
  }
}

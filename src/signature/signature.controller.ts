import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_LAST_SIGNATURE_MOCK from './data/last-signature.json';

@Controller('signature')
export class SignatureController {
  @Get('getLastSignature')
  public async getLastSignature(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_LAST_SIGNATURE_MOCK);
  }
}

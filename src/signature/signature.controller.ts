import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ISaveSignatureRequest } from './signature.models';

import * as GET_LAST_SIGNATURE_MOCK from './data/last-signature.json';
import * as GET_SIGNATURE_HISTORY_MOCK from './data/signature-history.json';
import * as SIGNATURE_CONTENT_MOCK from './data/signature-content.json';
import * as GET_CONFIRMED_SIGNATURE_MOCK from './data/get-confirmed-signature.json';
import * as CHECK_SIGNATURE_MOCK from './data/check-signature.json';

@Controller('signature')
export class SignatureController {
  @Get('getLastSignature')
  public async getLastSignature(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_LAST_SIGNATURE_MOCK);
  }
  @Get('GetSignaturesHistory')
  public async getSignaturesHistory(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_SIGNATURE_HISTORY_MOCK);
  }
  @Get('getSignatureContent')
  public async getSignatureContent(
    @Query('signaturePath') signaturePath: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SIGNATURE_CONTENT_MOCK);
  }
  @Get('getConfirmedSignature')
  public async getConfirmedSignature(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_CONFIRMED_SIGNATURE_MOCK);
  }
  @Get('checkSignature')
  public async checkSignature(
    @Query('dealerCode') dealerCode: string,
    @Res() res: Response) {
    return res.status(HttpStatus.OK).json(CHECK_SIGNATURE_MOCK);
  }

  @Post('SaveSignatureContent')
  public async saveSignatureContent(
    @Body() req: ISaveSignatureRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }
}

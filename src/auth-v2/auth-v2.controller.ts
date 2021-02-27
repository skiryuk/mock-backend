import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  AuthCheckCodeLogonRequest, AuthCheckCodeLogonResponse,
  AuthInSalepointRequest, AuthInSalepointResponse,
  AuthLogonRequest, AuthLogonResponse, AuthRefreshResponse,
  RefreshTokenRequest,
} from './auth-v2.models';

import * as REFRESH_TOKEN_MOCK from './data/refresh-token.json';
import * as SMS_LOGON_MOCK from './data/sms-logon.json';
import * as CONFIRM_SMS_LOGON_MOCK from './data/confirm-sms-logon.json';
import * as AUTH_IN_SALES_POINT_MOCK from './data/auth-in-sales-point.json';
import * as AUTH_USER_MOCK from './data/auth-user.json';

@Controller('v2/auth')
export class AuthV2Controller {
  @Post('refresh')
  public async refreshToken(
    @Body() req: RefreshTokenRequest,
    @Res() res: Response,
  ) {
    const mock = REFRESH_TOKEN_MOCK as AuthRefreshResponse;
    mock.accessToken.expires = new Date(
      new Date().setDate(new Date().getDate() + 1),
    ).toISOString();
    mock.refreshToken.expires = new Date(
      new Date().setDate(new Date().getDate() + 3),
    ).toISOString();
    return res.status(HttpStatus.OK).json(mock);
  }

  @Post('sms-logon')
  public async authLogon(@Body() req: AuthLogonRequest, @Res() res: Response) {
    const mock = SMS_LOGON_MOCK as AuthLogonResponse;
    mock.smsCodeExpiration = new Date(
      new Date().setDate(new Date().getDate() + 1),
    ).toISOString();
    return res.status(HttpStatus.OK).json(mock);
  }

  @Post('confirm-sms-logon')
  public async confirmAuthLogonSms(
    @Body() req: AuthCheckCodeLogonRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CONFIRM_SMS_LOGON_MOCK);
  }

  @Post('sign-in/sales-point')
  public async authInSalepoint(
    @Body() req: AuthInSalepointRequest,
    @Res() res: Response,
  ) {
    const mock = AUTH_IN_SALES_POINT_MOCK as AuthInSalepointResponse;
    mock.accessToken.expires = new Date(
      new Date().setDate(new Date().getDate() + 1),
    ).toISOString();
    mock.refreshToken.expires = new Date(
      new Date().setDate(new Date().getDate() + 3),
    ).toISOString();
    return res.status(HttpStatus.OK).json(mock);
  }

  @Get('user')
  public async getAuthUser(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(AUTH_USER_MOCK);
  }
}

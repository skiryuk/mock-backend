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
import * as REFRESH_TOKEN_ERROR_MOCK from './data/refr-token-err-unauth.json';

@Controller('v2/auth')
export class AuthV2Controller {
  @Post('refresh')
  public async refreshToken(
    @Body() req: RefreshTokenRequest,
    @Res() res: Response,
  ) {
    const mock = REFRESH_TOKEN_MOCK as AuthRefreshResponse;
    // mock.accessToken.value = (Math.random() + Math.random()).toString();
    mock.accessToken.expires = new Date(
      new Date().setDate(new Date().getDate() + 1),
    ).toISOString();
    mock.refreshToken.expires = new Date(
      new Date().setDate(new Date().getDate() + 3),
    ).toISOString();
    return res.status(HttpStatus.OK).json(mock);
    // return res.status(HttpStatus.UNAUTHORIZED).json(REFRESH_TOKEN_ERROR_MOCK);
  }

  @Post('sms-logon')
  public async authLogon(@Body() req: AuthLogonRequest, @Res() res: Response) {
    const mock = SMS_LOGON_MOCK as AuthLogonResponse;
    mock.smsCodeExpiration = new Date(
      new Date().setDate(new Date().getDate() + 1),
    ).toISOString();
    if (mock.authToken) {
      mock.authToken.expires = new Date(
        new Date().setDate(new Date().getDate() + 1),
      ).toISOString();
    }
    return res.status(HttpStatus.OK).json(mock);
  }

  @Post('confirm-sms-logon')
  public async confirmAuthLogonSms(
    @Body() req: AuthCheckCodeLogonRequest,
    @Res() res: Response,
  ) {
    const mock = CONFIRM_SMS_LOGON_MOCK as AuthCheckCodeLogonResponse;
    if (mock.authToken) {
      mock.authToken.expires = new Date(
        new Date().setDate(new Date().getDate() + 1),
      ).toISOString();
    }
    return res.status(HttpStatus.OK).json(mock);
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

  @Get('check')
  public async authCheck(@Res() res: Response) {
    return res.status(HttpStatus.OK).json();
  }
}

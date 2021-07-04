import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  AuthCheckCodeLogonRequest,
  AuthCheckCodeLogonResponse,
  AuthInSalepointRequest,
  AuthInSalepointResponse,
  AuthLogonRequest,
  AuthLogonResponse,
  AuthRefreshResponse, IBeginRegisterRequest, IFinishRegisterRequest, IRegisterCheckCodeRequest,
  RefreshTokenRequest,
} from './auth-v2.models';

import * as REFRESH_TOKEN_MOCK from './data/refresh-token.json';
import * as SMS_LOGON_MOCK from './data/sms-logon.json';
import * as CONFIRM_SMS_LOGON_MOCK from './data/confirm-sms-logon.json';
import * as AUTH_IN_SALES_POINT_MOCK from './data/auth-in-sales-point.json';
import * as AUTH_USER_MOCK from './data/auth-user.json';
import * as BEGIN_REGISTER_MOCK from './data/begin-register.json';
import * as REG_CHECK_CODE_MOCK from './data/reg-check-code.json';
import * as FINISH_REGISTER_MOCK from './data/finish-register.json';
import * as REFRESH_TOKEN_ERROR_MOCK from './data/refr-token-err-unauth.json';

import * as fs from 'fs';
import * as stream from 'stream';

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

  @Get('register/captcha/:phone')
  public async getRegisterCaptcha(
    @Param('phone') phone: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/reg-captcha.png');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'image/png');
      res.setHeader(
        'x-captcha',
        'Hzoa51tEi9+howS1QQmoimD5qsBowr8fFq4vMcxjoYQGC0Mva1ZvTgykVtxAYMuT7Ilsj/gdZ1q95CyPi3XEMt3KhmhM60pDblNG3A4R07DDnGLKRKrCQ4ADKNy9Fc1cEANSZHRyDEnqJvHCzSfw5w==',
      );
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }

  @Post('register')
  public async beginRegister(
    @Body() req: IBeginRegisterRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(BEGIN_REGISTER_MOCK);
  }

  @Post('register/check-code')
  public async checkCode(
    @Body() req: IRegisterCheckCodeRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(REG_CHECK_CODE_MOCK);
  }

  @Post('register/create')
  public async finishRegister(
    @Body() req: IFinishRegisterRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(FINISH_REGISTER_MOCK);
  }
}

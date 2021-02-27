import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CheckDepartmentCodeRequest } from './passport.models';
import * as CHECK_DEPARTMENT_CODE_MOCK from './data/check-department-code.json';

@Controller('v2/passport')
export class PassportV2Controller {
  @Post('issuer/find')
  public async checkDepartmentCode(
    @Body() req: CheckDepartmentCodeRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CHECK_DEPARTMENT_CODE_MOCK);
  }
}

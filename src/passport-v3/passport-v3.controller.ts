import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import * as CHECK_DEPARTMENT_CODE_MOCK from './data/check-department-code.json';

@Controller('v3/passport')
export class PassportV3Controller {
  @Get('issuer/find')
  public async checkDepartmentCode(
    @Query('code') code: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CHECK_DEPARTMENT_CODE_MOCK);
  }
}

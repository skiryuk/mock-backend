import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_CASES_COUNT_MOCK from './data/get-cases-count.json';
import * as GET_CASES_ROLES_MOCK from './data/get-cases-roles.json';

@Controller('v2/case')
export class CaseV2Controller {
  @Get('count')
  public async getCasesCount(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_CASES_COUNT_MOCK);
  }

  @Get('roles')
  public async getCasesRoles(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CASES_ROLES_MOCK);
  }
}

import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import * as GET_CASE_ROLES_LIST_MOCK from './data/get-case-roles-list.json';

@Controller('v2/cases')
export class CasesV2Controller {
  @Get('roles')
  public async getCaseRoles(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CASE_ROLES_LIST_MOCK);
  }
}

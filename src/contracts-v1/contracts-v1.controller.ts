import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import * as GET_UNBLOCKED_ACRM_MOCK from './data/get-unblocked-acrm.json';
import * as GET_FILTER_EXIST_CONTRACTS_MOCK from './data/get-filter-exists-contracts.json';
import * as DOC_CONFIRM_MOCK from './data/doc-confirm.json';

@Controller('v1/contract')
export class ContractsV1Controller {
  @Get('unblocked-acrm/check')
  public async getUnblockedAcrm(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_UNBLOCKED_ACRM_MOCK);
  }

  @Post('filter/exists')
  public async hasRejectedContracts(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_FILTER_EXIST_CONTRACTS_MOCK);
  }

  @Get('docconfirm')
  public async docConfirm(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(DOC_CONFIRM_MOCK);
  }
}

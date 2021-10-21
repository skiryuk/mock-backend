import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_MNP_AGREEMENT_DETAILS_MOCK from './data/get-mnp-agreement-details.json';
import * as GET_AGREEMENT_DETAILS_MOCK from './data/get-agreement-details.json';
import { ConfigService } from '../config/config.service';
import * as GET_BILL_PLANS_MOCK from './data/get-bill-plans.json';
import { IContractDetailsConnection, IUpdateContractConnectionRequest } from '../contracts/contracts.models';
import * as ADD_CONTRACT_CONNECTION_MOCK from './data/add-contract-connection.json';
import { ICreateDraftRequest } from './contracts-v4.models';
import * as CREATE_DRAFT_MOCK from './data/create-draft.json';

@Controller('v4/contract')
export class ContractsV4Controller {

  constructor(private _configService: ConfigService) {}

  @Get(':contractId/info')
  public async getAgreementDetailsV4(
    @Param('contractId') contractId: number,
    @Query('isFromRegistry') isFromRegistry: boolean,
    @Res() res: Response,
  ) {
    if (this._configService.config.contracts.mnp) {
      return res.status(HttpStatus.OK).json(GET_MNP_AGREEMENT_DETAILS_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(GET_AGREEMENT_DETAILS_MOCK);
    }
  }

  @Get('tariffs')
  public async getBillPlansV4(
    @Query('iccId') iccId: string,
    @Query('contractDate') contractDate: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_BILL_PLANS_MOCK);
  }

  @Post('connection/create')
  public async createConnection(
    @Body() req: IUpdateContractConnectionRequest,
    @Res() res: Response,
  ) {
    const mock = ADD_CONTRACT_CONNECTION_MOCK as IContractDetailsConnection;
    mock.connectionId = Math.floor(Math.random() * 10000000);
    mock.simId = req.simId;
    return res.status(HttpStatus.OK).json(ADD_CONTRACT_CONNECTION_MOCK);
  }

  @Post('create')
  public async createDraftV4(
    @Body() req: ICreateDraftRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_DRAFT_MOCK);
  }
}

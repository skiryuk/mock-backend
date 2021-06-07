import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import * as NEW_D_CHECK_POSSIBLE_MOCK from './data/new-d-check-possible.json';
import * as NEW_D_MNP_CHECK_POSSIBLE_MOCK from './data/new-d-mnp-check-possible.json';

import * as EXIST_D_CHECK_POSSIBLE_MOCK from './data/exist-d-check-possible.json';
import * as EXIST_D_MNP_CHECK_POSSIBLE_MOCK from './data/exist-d-mnp-check-possible.json';

import * as GET_BILL_PLANS_MOCK from './data/get-bill-plans.json';
import * as GET_FILTERED_CONTRACTS_LIST_MOCK from './data/get-filtered-contracts-list.json';
import * as GET_STATUSES_LIST_MOCK from './data/get-statuses-list.json';
import * as CREATE_DRAFT_MOCK from './data/create-draft.json';
import * as SEND_TO_MNP_REG_MOCK from './data/send-to-mnp-reg.json';
import * as SEND_TO_MNP_E_REG_MOCK from './data/send-to-e-mnp-reg.json';
import * as SEND_TO_REG_MOCK from './data/send-to-reg.json';
import * as CREATE_GSIGN_MOCK from './data/create-gsign.json';

import {
  ContractListFilterRequest,
  CreateDraftRequest,
  FilterListRequest,
  ICreateGraphicSignSessionResponse,
} from './contracts-v2.models';
import { ConfigService } from '../config/config.service';
import { EContractsKits, EContractsModes } from '../config/config.enums';

@Controller('v2/contract')
export class ContractsV2Controller {
  constructor(private _configService: ConfigService) {}

  @Get('check-possible')
  public async checkPossible(
    @Query('iccId') iccId: string,
    @Query('checkCode') checkCode: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(this._getCheckResponse());
  }

  @Get('tariffs')
  public async getBillPlans(
    @Query('iccId') iccId: string,
    @Query('contractDate') contractDate: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_BILL_PLANS_MOCK);
  }

  @Post('list')
  public async getFilteredContractsPage(
    @Body() req: FilterListRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_FILTERED_CONTRACTS_LIST_MOCK);
  }

  @Post('list/filters')
  public async getContractListStatuses(
    @Body() req: ContractListFilterRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_STATUSES_LIST_MOCK);
  }

  @Post('create-draft')
  public async createDraft(
    @Body() req: CreateDraftRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_DRAFT_MOCK);
  }

  @Post('update')
  public async updateDraft(@Res() res: Response) {
    return res.status(HttpStatus.OK).json();
  }

  @Post(':contractId/mnp/register')
  public async sendToMNPRegistration(
    @Param('contractId') contractId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_TO_MNP_REG_MOCK);
  }

  @Post(':contractId/mnp/register/mp')
  public async sendToEMNPRegistration(
    @Param('contractId') contractId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_TO_MNP_E_REG_MOCK);
  }

  @Post(':contractId/register')
  public async sendAgreementToRegistration(
    @Param('contractId') contractId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_TO_REG_MOCK);
  }

  @Post(':contractId/gsign')
  public async contractGSign(
    @Param('contractId') contractId: number,
    @Res() res: Response,
  ) {
    const mock = CREATE_GSIGN_MOCK as ICreateGraphicSignSessionResponse;
    mock.expiration = new Date(
      new Date().getTime() + 10 * 60 * 1000,
    ).toISOString();
    return res.status(HttpStatus.OK).json(mock);
  }

  private _getCheckResponse() {
    switch (this._configService.config.contracts.mode) {
      case EContractsModes.NEW:
        switch (this._configService.config.contracts.kit) {
          case EContractsKits.D:
            if (this._configService.config.contracts.mnp) {
              return NEW_D_MNP_CHECK_POSSIBLE_MOCK;
            } else {
              return NEW_D_CHECK_POSSIBLE_MOCK;
            }
          default:
            return NEW_D_CHECK_POSSIBLE_MOCK;
        }
      case EContractsModes.EDIT:
        switch (this._configService.config.contracts.kit) {
          case EContractsKits.D:
            if (this._configService.config.contracts.mnp) {
              return EXIST_D_MNP_CHECK_POSSIBLE_MOCK;
            } else {
              return EXIST_D_CHECK_POSSIBLE_MOCK;
            }
          default:
            return EXIST_D_CHECK_POSSIBLE_MOCK;
        }
      default:
        return NEW_D_CHECK_POSSIBLE_MOCK;
    }
  }
}

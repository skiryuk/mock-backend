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
import { IContractCheckRequest } from './contracts-v3.models';
import { ICreateDraftRequest } from './contracts-v3.models';

import { EContractsKits, EContractsModes } from '../config/config.enums';
import { ConfigService } from '../config/config.service';

import * as NEW_D_MNP_CHECK_POSSIBLE_MOCK from './data/new-d-mnp-check-possible.json';
import * as NEW_D_CHECK_POSSIBLE_MOCK from './data/new-d-check-possible.json';
import * as NEW_P_CHECK_POSSIBLE_MOCK from './data/new-p-check-possible.json';
import * as EXIST_D_MNP_CHECK_POSSIBLE_MOCK from './data/exist-d-mnp-check-possible.json';
import * as EXIST_D_CHECK_POSSIBLE_MOCK from './data/exist-d-check-possible.json';
import * as EXIST_P_CHECK_POSSIBLE_MOCK from './data/exist-p-check-possible.json';
import * as GET_MNP_AGREEMENT_DETAILS_MOCK from './data/get-mnp-agreement-details.json';
import * as GET_AGREEMENT_DETAILS_MOCK from './data/get-agreement-details.json';
import * as CREATE_DRAFT_MOCK from './data/create-draft.json';

@Controller('v3/contract')
export class ContractsV3Controller {
  constructor(private _configService: ConfigService) {}

  @Post('check')
  public async checkPossibleV3(
    @Body() req: IContractCheckRequest,
    @Res() res: Response,
  ) {
    const mock = this._getCheckResponse();
    mock.iccId = `8970199${Math.floor(
      Math.random() * 100000000000,
    ).toString()}`;
    return res.status(HttpStatus.OK).json(mock);
  }

  @Get(':contractId/info')
  public async getAgreementDetailsV3(
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

  @Post('create')
  public async createDraftV3(
    @Body() req: ICreateDraftRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_DRAFT_MOCK);
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
          case EContractsKits.P:
            if (this._configService.config.contracts.mnp) {
              return NEW_D_MNP_CHECK_POSSIBLE_MOCK;
            } else {
              return NEW_P_CHECK_POSSIBLE_MOCK;
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
          case EContractsKits.P:
            if (this._configService.config.contracts.mnp) {
              return EXIST_D_MNP_CHECK_POSSIBLE_MOCK;
            } else {
              return EXIST_P_CHECK_POSSIBLE_MOCK;
            }
          default:
            return EXIST_D_CHECK_POSSIBLE_MOCK;
        }
      default:
        return NEW_D_CHECK_POSSIBLE_MOCK;
    }
  }
}

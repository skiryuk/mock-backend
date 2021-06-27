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

import { EContractsKits, EContractsModes } from '../config/config.enums';
import { ConfigService } from '../config/config.service';
import {
  IConfirmOpenContractBySmsRequest, IContractDetailsConnection,
  IGetBillingPlansRequest,
  IRemoveContractConnectionRequest,
  ISendContractOpenSmsRequest,
  ISendEContractRegistrationRequest, IUpdateContractConnectionRequest,
} from './contracts.models';

import * as NEW_D_CHECK_CUSTOMER_MOCK from './data/new-d-check-customer.json';
import * as NEW_D_MNP_CHECK_CUSTOMER_MOCK from './data/new-d-mnp-check-customer.json';

import * as EXIST_D_CHECK_CUSTOMER_MOCK from './data/exist-d-check-customer.json';
import * as EXIST_D_MNP_CHECK_CUSTOMER_MOCK from './data/exist-d-mnp-check-customer.json';

import * as GET_AGREEMENT_DETAILS_MOCK from './data/get-agreement-details.json';
import * as GET_MNP_AGREEMENT_DETAILS_MOCK from './data/get-mnp-agreement-details.json';

import * as GET_BILL_PLANS_MOCK from './data/get-bill-plans.json';
import * as GET_PAY_SYSTEMS_MOCK from './data/get-pay-systems.json';
import * as GET_DOC_TYPES_MOCK from './data/doc-types.json';
import * as GET_COUNTRY_TYPES_MOCK from './data/country-types.json';
import * as SEND_TO_REG_MOCK from './data/send-to-reg.json';
import * as SEND_TO_E_REG_MOCK from './data/send-to-e-reg.json';
import * as BUILDING_TYPES_MOCK from './data/building-types.json';
import * as ROOM_TYPES_MOCK from './data/room-types.json';
import * as PLACE_TYPES_MOCK from './data/place-types.json';
import * as STREET_TYPES_MOCK from './data/street-types.json';
import * as RECOG_DOC_TYPES_MOCK from './data/recog-document-types.json';
import * as GET_AGREEMENT_HISTORY_MOCK from './data/get-agreement-history.json';

import * as ATTACHMENT_PROFILE_CONTRACT_MOCK from './data/attachment-profile-contract.json';
import * as ATTACHMENT_PROFILE_IDENTIFY_MOCK from './data/attachment-profile-identify.json';
import * as ATTACHMENT_PROFILE_MNP_MOCK from './data/attachment-profile-mnp.json';
import * as GET_CONTRACT_STATUSES_MOCK from './data/get-contract-statuses.json';
import * as GET_ECM_ERROR_COUNTS_MOCK from './data/get-ecm-error-counts.json';
import * as GET_DEALER_BILLING_PLANS_MOCK from './data/get-dealer-billing-plans.json';
import * as SEND_CONTRACT_OPEN_SMS from './data/send-contract-open-sms.json';
import * as CONFIRM_CONTRACT_OPEN_SMS from './data/confirm-contract-open-sms.json';
import * as ADD_CONTRACT_CONNECTION_MOCK from './data/add-contract-connection.json';

import { EProfileAliases } from './contracts.enums';
import * as SMS_LOGON_MOCK from '../auth-v2/data/sms-logon.json';
import { AuthLogonResponse } from '../auth-v2/auth-v2.models';

@Controller('contract')
export class ContractsController {
  constructor(private _configService: ConfigService) {}

  @Get('check-customer')
  public async openContractByIccid(
    @Query('iccId') iccId: string,
    @Res() res: Response,
  ) {
    switch (this._configService.config.contracts.mode) {
      case EContractsModes.NEW:
        switch (this._configService.config.contracts.kit) {
          case EContractsKits.D: {
            if (this._configService.config.contracts.mnp) {
              return res
                .status(HttpStatus.OK)
                .json(NEW_D_MNP_CHECK_CUSTOMER_MOCK);
            } else {
              return res.status(HttpStatus.OK).json(NEW_D_CHECK_CUSTOMER_MOCK);
            }
          }
          default:
            return res.status(HttpStatus.OK).json(NEW_D_CHECK_CUSTOMER_MOCK);
        }
      case EContractsModes.EDIT:
        switch (this._configService.config.contracts.kit) {
          case EContractsKits.D:
            if (this._configService.config.contracts.mnp) {
              return res
                .status(HttpStatus.OK)
                .json(EXIST_D_MNP_CHECK_CUSTOMER_MOCK);
            } else {
              return res
                .status(HttpStatus.OK)
                .json(EXIST_D_CHECK_CUSTOMER_MOCK);
            }
          default:
            return res.status(HttpStatus.OK).json(EXIST_D_CHECK_CUSTOMER_MOCK);
        }
      default:
        return res.status(HttpStatus.OK).json(NEW_D_CHECK_CUSTOMER_MOCK);
    }
  }

  @Get('getAgreementDetails')
  public async getAgreementDetails(
    @Query('contractId') contractId: number,
    @Query('isFromRegistry') isFromRegistry: boolean,
    @Res() res: Response,
  ) {
    if (this._configService.config.contracts.mnp) {
      return res.status(HttpStatus.OK).json(GET_AGREEMENT_DETAILS_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(GET_MNP_AGREEMENT_DETAILS_MOCK);
    }
  }

  @Get('getTariffPlans')
  public async getBillPlans(
    @Query('iccId') iccId: string,
    @Query('contractDate') contractDate: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_BILL_PLANS_MOCK);
  }

  @Get('getPaySystems')
  public async getPaySystems(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_PAY_SYSTEMS_MOCK);
  }

  @Get('getDocumentTypes')
  public async getDocumentTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_DOC_TYPES_MOCK);
  }

  @Get('getCountryTypes')
  public async getCountryTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_COUNTRY_TYPES_MOCK);
  }

  @Post('addConnectionToAgreement')
  public async addConnectionToAgreement(
    @Body() req: IUpdateContractConnectionRequest,
    @Res() res: Response,
  ) {
    const mock = ADD_CONTRACT_CONNECTION_MOCK as IContractDetailsConnection;
    mock.connectionId = Math.floor(Math.random() * 10000000);
    mock.simId = req.simId;
    return res.status(HttpStatus.OK).json(ADD_CONTRACT_CONNECTION_MOCK);
  }

  @Post('deleteConnectionFromAgreement')
  public async removeContractConnection(
    @Body() req: IRemoveContractConnectionRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('sendAgreementToRegistration')
  public async sendAgreementToRegistration(
    @Query('contractId') contractId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_TO_REG_MOCK);
  }

  @Post('sendAgreementToRegistrationWithSignature')
  public async sendAgreementToRegistrationWithSignature(
    @Query('contractId') contractId: string,
    @Body() req: ISendEContractRegistrationRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_TO_E_REG_MOCK);
  }

  @Get('attachment/profile/:alias')
  public async getAttachmentProfile(
    @Param('alias') alias: string,
    @Res() res: Response,
  ) {
    switch (alias) {
      case EProfileAliases.CONTRACT:
        return res.status(HttpStatus.OK).json(ATTACHMENT_PROFILE_CONTRACT_MOCK);
      case EProfileAliases.IDENTITY:
        return res.status(HttpStatus.OK).json(ATTACHMENT_PROFILE_IDENTIFY_MOCK);
      case EProfileAliases.MNP:
        return res.status(HttpStatus.OK).json(ATTACHMENT_PROFILE_MNP_MOCK);
      default:
        return res.status(HttpStatus.OK).json(ATTACHMENT_PROFILE_CONTRACT_MOCK);
    }
  }

  @Get('getPlaceTypes')
  public async getPlaceTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(PLACE_TYPES_MOCK);
  }

  @Get('getRoomTypes')
  public async getRoomTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(ROOM_TYPES_MOCK);
  }

  @Get('getStreetTypes')
  public async getStreetTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(STREET_TYPES_MOCK);
  }

  @Get('getBuildingTypes')
  public async getBuildingTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(BUILDING_TYPES_MOCK);
  }

  @Get('recog-document-types')
  public async getRecogDocTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(RECOG_DOC_TYPES_MOCK);
  }

  @Get('getAgreementsHistory')
  public async getAgreementsHistory(
    @Query('contractId') contractId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_AGREEMENT_HISTORY_MOCK);
  }

  @Get('getContractStatuses')
  public async getContractStatuses(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_CONTRACT_STATUSES_MOCK);
  }

  @Get('attachment/ecm-error-count')
  public async getEcmErrorCount(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_ECM_ERROR_COUNTS_MOCK);
  }

  @Post('GetDealerBillingPlans')
  public async getDealerBillingPlans(
    @Body() req: IGetBillingPlansRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_DEALER_BILLING_PLANS_MOCK);
  }

  @Post('ctn/sms')
  public async sendContractOpenSms(
    @Body() req: ISendContractOpenSmsRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_CONTRACT_OPEN_SMS);
  }

  @Post('ctn/confirm')
  public async confirmOpenContractBySms(
    @Body() req: IConfirmOpenContractBySmsRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CONFIRM_CONTRACT_OPEN_SMS);
  }
}

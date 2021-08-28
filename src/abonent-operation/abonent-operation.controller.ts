import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ICheckCancelTransferNumberReq,
  ICheckSmsIdentifyReq,
  ICheckTransferNumberReq,
  IConfirmSmsRequest,
  IConnectAvailableServiceRequest,
  IGetAbonentAdBillPlanInfoRequest,
  IGetAbonentOperationListReq,
  ISendSmsIdentifyReq,
  ISetTargetOfferAnswerRequest,
  ISmsConfirmationInfoRequest,
  ITransferingOperationStatusReq,
} from './abonent-operation.models';
import * as GET_AO_TYPES_MOCK from './data/get-ao-types.json';
import * as GET_AO_DETAILS_MOCK from './data/get-ao-details.json';
import * as GET_TARGET_OFFERS_MOCK from './data/get-target-offers.json';
import * as SET_TARGET_OFFER_ANSWER_MOCK from './data/set-target-offer-answer.json';
import * as SEND_SMS_CONFIRMATION_MOCK from './data/send-sms-confirmation.json';
import * as CONFIRM_AO_SMS_MOCK from './data/confirm-ao-sms.json';
import * as GET_BILL_PLAN_LIST_MOCK from './data/get-bill-plan-list.json';
import * as GET_UPSELL_OFFERS_MOCK from './data/get-upsell-offers.json';
import * as GET_CURRENT_BILL_PLAN_INFO_MOCK from './data/get-current-bill-plan-info.json';
import * as GET_ABONENT_BALANCE_MOCK from './data/get-abonent-balance.json';
import * as REQ_ABONENT_STATS_MOCK from './data/request-abonent-stats.json';
import * as CONFIRM_ABONENT_STATS_MOCK from './data/confirm-abonent-stats.json';
import * as GET_ACTIONS_LIST_MOCK from './data/get-actions-list.json';
import * as GET_ABONENT_ACTIONS_BILL_PLAN_INFO_MOCK from './data/get-abonent-actions-bill-plan-info.json';
import * as GET_AVAILABLE_SERVICES_MOCK from './data/get-available-services.json';
import * as GET_CONNECTED_SERVICES_MOCK from './data/get-connected-services.json';
import * as GET_SUBSCRIPTIONS_MOCK from './data/get-subscriptions.json';
import * as CONNECT_AVAILABLE_SERVICE_MOCK from './data/connect-available-service.json';
import * as GET_BLOCKING_TYPES_LIST_MOCK from './data/get-blocking-types.json';
import * as GET_SIM_REPLACE_REASONS_MOCK from './data/get-sim-replace-reasons.json';
import * as GET_CAMPAIGN_TYPES_MOCK from './data/get-campaign-types.json';
import * as SEND_SMS_IDENTIFY_MOCK from './data/send-sms-identify.json';
import * as CHECK_SMS_IDENTIFY_MOCK from './data/check-sms-identify.json';
import * as CHECK_TRANSFER_NUMBER_MOCK from './data/check-transfer-number.json';
import * as CANCEL_CHECK_TRANSFER_NUMBER_MOCK from './data/cancel-check-transfer.json';
import * as GET_TRANSFERRING_STATUS_MOCK from './data/get-transferring-status.json';
import * as GET_AO_LIST from './data/get-ao-list.json';

import * as fs from 'fs';
import * as stream from 'stream';

@Controller('AbonentOperation')
export class AbonentOperationController {
  @Get('getAbonentOperationTypes')
  public async getAbonentOperationTypes(
    @Query('phone') phone: string,
    @Query('customerTypeCode') customerTypeCode: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_AO_TYPES_MOCK);
  }

  @Get('getAbonentOperationDetails')
  public async getAbonentOperationDetails(
    @Query('abonentOperationId') abonentOperationId: string,
    @Query('customerTypeCode') customerTypeCode: string,
    @Query('ctn') ctn: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_AO_DETAILS_MOCK);
  }

  @Get('getTargetOfferList')
  public async getTargetOffers(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_TARGET_OFFERS_MOCK);
  }

  @Post('setTargetOfferAnswer')
  public async setTargetOfferAnswer(
    @Body() req: ISetTargetOfferAnswerRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SET_TARGET_OFFER_ANSWER_MOCK);
  }

  @Post('sendSmsConfirmation')
  public async sendSmsConfirmation(
    @Body() req: ISmsConfirmationInfoRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_SMS_CONFIRMATION_MOCK);
  }

  @Post('ConfirmSmsConfirmationRequest')
  public async confirmAbonentOperationSms(
    @Body() req: IConfirmSmsRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CONFIRM_AO_SMS_MOCK);
  }

  @Get('getBillPlanList')
  public async getBillPlanList(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_BILL_PLAN_LIST_MOCK);
  }

  @Get('executeAbonentOperation')
  public async executeAbonentOperation(
    @Query('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('UpsellOffers')
  public async getUpsellOffers(
    @Query('ctn') ctn: string,
    @Query('soc') soc: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_UPSELL_OFFERS_MOCK);
  }

  @Get('getCurrentBillPlanInfo')
  public async getCurrentBillPlanInfo(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CURRENT_BILL_PLAN_INFO_MOCK);
  }

  @Get('getAbonentBalance')
  public async getAbonentBalance(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_ABONENT_BALANCE_MOCK);
  }

  @Post('charges-sms')
  public async requestAbonentStats(
    @Query('ctn') ctn: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(REQ_ABONENT_STATS_MOCK);
  }

  @Post('charges-sms-confirm')
  public async confirmAbonentStats(
    @Query('ctn') ctn: string,
    @Query('code') code: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CONFIRM_ABONENT_STATS_MOCK);
  }

  @Get('getAbonentActionList')
  public async getAbonentActionList(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_ACTIONS_LIST_MOCK);
  }

  @Post('getAbonentActionBillPlanInfo')
  public async getAbonentActionBillPlanInfo(
    @Body() req: IGetAbonentAdBillPlanInfoRequest,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(GET_ABONENT_ACTIONS_BILL_PLAN_INFO_MOCK);
  }

  @Get('getVasAbonentOperations')
  public async getVasAbonentOperations(
    @Query('phone') phone: string,
    @Query('customerTypeCode') customerTypeCode: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_AVAILABLE_SERVICES_MOCK);
  }

  @Get('getConnectedServices')
  public async getConnectedServices(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CONNECTED_SERVICES_MOCK);
  }

  @Get('getSubscriptions')
  public async getSubscriptions(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_SUBSCRIPTIONS_MOCK);
  }

  @Post('createVasOperation')
  public async createVasOperation(
    @Body() req: IConnectAvailableServiceRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CONNECT_AVAILABLE_SERVICE_MOCK);
  }

  @Get('getBlockingTypesList')
  public async getBlockingTypesList(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_BLOCKING_TYPES_LIST_MOCK);
  }

  @Get('getSimReplaceReasons')
  public async getSimReplaceReasons(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_SIM_REPLACE_REASONS_MOCK);
  }

  @Get('getCampaignTypesList')
  public async getCampaignTypesList(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_CAMPAIGN_TYPES_MOCK);
  }

  @Post('sendSmsIdentify')
  public async sendSmsIdentify(
    @Body() req: ISendSmsIdentifyReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_SMS_IDENTIFY_MOCK);
  }

  @Post('checkSmsIdentify')
  public async checkSmsIdentify(
    @Body() req: ICheckSmsIdentifyReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CHECK_SMS_IDENTIFY_MOCK);
  }

  @Get('deleteAbonentOperation')
  public async deleteAbonentOperation(
    @Query('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('unlockAbonentOperationRequest')
  public async unlockAbonentOperationRequest(
    @Query('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('lockAbonentOperationRequest')
  public async lockAbonentOperationRequest(
    @Query('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Post('getAbonentOperationList')
  public async getAbonentOperationList(
    @Body() req: IGetAbonentOperationListReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_AO_LIST);
  }

  @Post('canPhoneNumberBeMoved')
  public async canPhoneNumberBeMoved(
    @Body() req: ICheckTransferNumberReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CHECK_TRANSFER_NUMBER_MOCK);
  }

  @Post('canPhoneNumberMovingBeCanceled')
  public async canPhoneNumberMovingBeCanceled(
    @Body() req: ICheckCancelTransferNumberReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CANCEL_CHECK_TRANSFER_NUMBER_MOCK);
  }

  @Post('getTransferingOperationStatus')
  public async getTransferingOperationStatus(
    @Body() req: ITransferingOperationStatusReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_TRANSFERRING_STATUS_MOCK);
  }

  @Get('GetAbonentActionExtraAgreement')
  public async loadContractPreview(
    @Query('extraAgreementPath') extraAgreementPath: string,
    @Query('access_token') accessToken: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/ad_extra_agreement.pdf');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'application/pdf');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }
}

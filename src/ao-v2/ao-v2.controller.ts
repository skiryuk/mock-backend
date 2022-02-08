import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

import * as fs from 'fs';
import * as stream from 'stream';

import {
  ICheckRequestReq,
  ICheckTransferNumberReq,
  ICreateAbonentOperationRequest,
  ICreateGraphicSignSessionResponse,
  IFilterListRequest,
  IReserveEsimReq,
} from './ao-v2.models';
import { ConfigService } from '../config/config.service';
import { ERequestOperationTypes } from '../config/config.enums';

import * as CREATE_GSIGN_MOCK from './data/create-gsign.json';
import * as GET_AO_LIST_MOCK from './data/get-ao-list.json';
import * as GET_AO_FILTER_STATUSES_MOCK from './data/get-filter-statuses.json';
import * as GET_AO_FILTER_CATEGORIES_MOCK from './data/get-filter-categories.json';
import * as GET_AO_REQ_INFO_MOCK from './data/get-ao-req-info.json';
import * as GET_AO_DETAILS_MOCK from './data/get-ao-details.json';
import * as CREATE_AO_MOCK from './data/create-ao.json';
import * as GET_SUBSCRIBER_INFO_MOCK from './data/get-subscriber-info.json';
import * as GET_REJECTION_REASONS_MOCK from './data/get-rejection-reasons.json';
import * as MNP_CHECK_MOCK from './data/mnp-check.json';

import * as GET_AO_BLOCKING_INFO_MOCK from './data/info/get-ao-blocking-info.json';
import * as GET_AO_DETALIZATION_INFO_MOCK from './data/info/get-ao-detalization-info.json';
import * as GET_AO_REJECTION_INFO_MOCK from './data/info/get-ao-rejection-info.json';

import * as GET_AO_BLOCKING_DETAILS_MOCK from './data/details/get-ao-blocking-details.json';
import * as GET_AO_DETALIZATION_DETAILS_MOCK from './data/details/get-ao-detalization-details.json';
import * as GET_AO_REJECTION_DETAILS_MOCK from './data/details/get-ao-rejection-details.json';
import * as GET_AO_PAID_REPLACE_ESIM_MOCK from './data/details/get-ao-paid-replace-esim.json';
import * as GET_AO_PAID_REPLACE_ESIM_INFO_MOCK from './data/info/get-ao-esim-replace-info.json';
import * as GET_UPSELL_OFFERS_MOCK from './data/get-upsell-offers.json';
import * as GET_CURRENT_BILL_PLAN_INFO_MOCK from './data/get-current-bill-plan-info.json';
import * as GET_TARGET_OFFERS_MOCK from './data/get-target-offers.json';
import * as GET_REFUND_PAYMENT_MOCK from './data/get-refund-payment.json';

@Controller('v2/ao')
export class AoV2Controller {
  constructor(private _configService: ConfigService) {
  }

  @Post('request/:requestId/gsign')
  public async requestGSign(
    @Param('requestId') requestId: number,
    @Res() res: Response,
  ) {
    const mock = CREATE_GSIGN_MOCK as ICreateGraphicSignSessionResponse;
    mock.expiration = new Date(
      new Date().getTime() + 10 * 60 * 1000,
    ).toISOString();
    return res.status(HttpStatus.OK).json(mock);
  }

  @Post('list')
  public async getAoList(
    @Body() req: IFilterListRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_AO_LIST_MOCK);
  }

  @Get('refs/statuses')
  public async getAoFilterStatuses(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_AO_FILTER_STATUSES_MOCK);
  }

  @Get('refs/categories')
  public async getAoFilterCategories(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_AO_FILTER_CATEGORIES_MOCK);
  }

  @Get(':operationId/info')
  public async getAbonentOperationDetailsV2(
    @Param('operationId') operationId: string,
    @Query('customerTypeCode') customerTypeCode: string,
    @Query('ctn') ctn: string,
    @Res() res: Response,
  ) {
    switch (this._configService.config.ao.type) {
      case ERequestOperationTypes.BLOCKING:
        return res.status(HttpStatus.OK).json(GET_AO_BLOCKING_DETAILS_MOCK);
      case ERequestOperationTypes.DETALIZATION:
        return res.status(HttpStatus.OK).json(GET_AO_DETALIZATION_DETAILS_MOCK);
      case ERequestOperationTypes.REJECT_CONTRACT:
        return res.status(HttpStatus.OK).json(GET_AO_REJECTION_DETAILS_MOCK);
      case ERequestOperationTypes.PAID_REPLACE_ESIM:
        return res.status(HttpStatus.OK).json(GET_AO_PAID_REPLACE_ESIM_MOCK);
    }
    return res.status(HttpStatus.OK).json(GET_AO_DETAILS_MOCK);
  }

  @Post('request')
  public async createAbonentOperation(
    @Body() req: ICreateAbonentOperationRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_AO_MOCK);
  }

  @Get('request/:requestId')
  public async getAbonentOperationInfoV2(
    @Param('requestId') requestId: string,
    @Res() res: Response,
  ) {
    switch (this._configService.config.ao.type) {
      case ERequestOperationTypes.BLOCKING:
        return res.status(HttpStatus.OK).json(GET_AO_BLOCKING_INFO_MOCK);
      case ERequestOperationTypes.DETALIZATION:
        return res.status(HttpStatus.OK).json(GET_AO_DETALIZATION_INFO_MOCK);
      case ERequestOperationTypes.REJECT_CONTRACT:
        return res.status(HttpStatus.OK).json(GET_AO_REJECTION_INFO_MOCK);
      case ERequestOperationTypes.PAID_REPLACE_ESIM:
        return res
          .status(HttpStatus.OK)
          .json(GET_AO_PAID_REPLACE_ESIM_INFO_MOCK);
    }
    return res.status(HttpStatus.OK).json(GET_AO_REQ_INFO_MOCK);
  }

  @Put('request/:requestId')
  public async updateAO(
    @Param('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Post('request/:requestId/execute')
  public async executeAbonentOperationV2(
    @Query('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('subscriber')
  public async getSubscriberInfo(
    @Query('ctn') ctn: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_SUBSCRIBER_INFO_MOCK);
  }

  @Get('refs/discard-contract/reasons')
  public async loadRejectionReasons(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_REJECTION_REASONS_MOCK);
  }

  @Post('mnp-check')
  public async mnpCheck(
    @Body() req: ICheckTransferNumberReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(MNP_CHECK_MOCK);
  }

  @Get(':requestId/scan/:scanId')
  public async loadAoScanFile(
    @Param('requestId') requestId: string,
    @Param('scanId') scanId: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/request_scan.pdf');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'application/pdf');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }

  @Post(':requestId/scan')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadAoScan(
    @Param('requestId') requestId: string,
    @Query('scanType') scanType: string,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('bill-plan/upsell/list')
  public async getUpsellOffers(
    @Query('ctn') ctn: string,
    @Query('soc') soc: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_UPSELL_OFFERS_MOCK);
  }

  @Get('bill-plan/info')
  public async getCurrentBillPlanInfo(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CURRENT_BILL_PLAN_INFO_MOCK);
  }

  @Get('target-offer/list')
  public async getTargetOffers(
    @Query('phone') phone: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_TARGET_OFFERS_MOCK);
  }

  @Post('request/check')
  public async checkRequest(
    @Body() req: ICheckRequestReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Post('esim/reserve')
  public async reserveEsim(@Body() req: IReserveEsimReq, @Res() res: Response) {
    return res.status(HttpStatus.OK).json();
  }

  @Post('request/:requestId/send-mail')
  public async sendEsimQrCode(
    @Param('requestId') requestId: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('refund')
  public async getRefundPayment(
    @Query('ctn') ctn: string,
    @Query('soc') soc: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_REFUND_PAYMENT_MOCK);
  }

  @Get('request/:requestId/esim/pdf')
  public async printEsimQrCode(
    @Query('access_token') accessToken: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(
        __dirname.replace('dist/src', 'dist') + '/data/ao_print.pdf',
      );
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'application/pdf');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }
}

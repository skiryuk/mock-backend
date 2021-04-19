import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res, UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';

import {
  ICheckTransferNumberReq,
  ICreateAbonentOperationRequest,
  ICreateGraphicSignSessionResponse,
  IFilterListRequest,
} from './ao-v2.models';

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
import fs from "fs";
import stream from "stream";
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('v2/ao')
export class AoV2Controller {
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
    return res.status(HttpStatus.OK).json(GET_AO_REQ_INFO_MOCK);
  }

  @Put('request/:requestId')
  public async updateAO(
    @Param('requestId') requestId: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get('request/:requestId/execute')
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
}

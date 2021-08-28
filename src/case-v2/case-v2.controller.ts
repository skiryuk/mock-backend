import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

import * as fs from 'fs';
import * as stream from 'stream';

import {
  IAddMessageRequest,
  IAppealPageFilterListReq,
  ICreateAppealReq,
} from './case-v2.models';

import * as GET_CASES_COUNT_MOCK from './data/get-cases-count.json';
import * as GET_CASES_ROLES_MOCK from './data/get-cases-roles.json';
import * as GET_CASES_LIST_MOCK from './data/get-cases-list.json';
import * as GET_CASES_STATUSES_MOCK from './data/get-cases-statuses.json';
import * as GET_CASES_TOPICS_MOCK from './data/get-cases-topics.json';
import * as GET_CASE_DETAILS_MOCK from './data/get-case-detail.json';
import * as SEND_ANSWER_MOCK from './data/send-answer.json';

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

  @Post('list')
  public async getFilteredAppeals(
    @Body() req: IAppealPageFilterListReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CASES_LIST_MOCK);
  }

  @Get('statuses')
  public async getStatuses(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CASES_STATUSES_MOCK);
  }

  @Get('topics')
  public async getTopics(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_CASES_TOPICS_MOCK);
  }

  @Get(':id')
  public async getAppealDetails(@Param('id') id: string, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_CASE_DETAILS_MOCK);
  }

  @Post(':id/answer')
  public async sendAnswer(
    @Param('id') id: string,
    @Body() req: IAddMessageRequest,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(SEND_ANSWER_MOCK);
  }

  @Post('create')
  public async createAppeal(
    @Body() req: ICreateAppealReq,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadAoScan(
    @Query('type') type: string,
    @Query('format') format: string,
    @Query('timestamp') timestamp: string,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json();
  }

  @Get(':appealId/file/:scanId')
  public async loadAppealAttachFile(
    @Param('appealId') appealId: string,
    @Param('scanId') scanId: string,
    @Res() res: Response,
  ) {
    try {
      const file = fs.readFileSync(__dirname + '/data/case_attach.jpeg');
      const readStream = new stream.PassThrough();
      readStream.end(file);
      res.set('Content-Type', 'image/jpeg');
      readStream.pipe(res);
    } catch (e) {
      console.log(e);
    }
  }
}

import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_CASES_TOPICS_MOCK from './data/get-case-topics-list.json';

@Controller('cases')
export class CasesController {
  @Get('getCaseTopics')
  public async getCaseTopics(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_CASES_TOPICS_MOCK);
  }
}

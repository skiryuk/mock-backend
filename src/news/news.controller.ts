import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_NEWS_LIST_MOCK from './data/news-list.json';

@Controller('news')
export class NewsController {
  @Get()
  public async getBillPlans(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_NEWS_LIST_MOCK);
  }
}

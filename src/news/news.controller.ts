import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import * as GET_NEWS_LIST_MOCK from './data/news-list.json';
import * as NEWS_DETAIL_MOCK from './data/news-detail.json';
import * as GET_NEWS_LIST_ERR_MOCK from './data/news-list-err.json';

@Controller('news')
export class NewsController {
  @Get()
  public async getNews(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_NEWS_LIST_MOCK);
    // return res.status(HttpStatus.UNAUTHORIZED).json(GET_NEWS_LIST_ERR_MOCK);
  }
  @Get('/:id')
  public async getDetailNews(@Param('id') id: number, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(NEWS_DETAIL_MOCK);
    // return res.status(HttpStatus.UNAUTHORIZED).json(GET_NEWS_LIST_ERR_MOCK);
  }
}

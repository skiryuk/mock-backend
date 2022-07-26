import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('v1/logout')
export class LogoutV1Controller {
  @Post()
  public async logout(
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }
}

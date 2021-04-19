import { Controller, Delete, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('v2/snmp')
export class SnmpV2Controller {
  @Delete('auto-bonus/:id')
  public async cancelAutoBonus(@Param('id') id: string, @Res() res: Response) {
    return res.status(HttpStatus.OK).json();
  }
}

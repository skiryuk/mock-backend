import { Module } from '@nestjs/common';
import { SalepointV2Controller } from './salepoint-v2.controller';

@Module({
  controllers: [SalepointV2Controller]
})
export class SalepointV2Module {}

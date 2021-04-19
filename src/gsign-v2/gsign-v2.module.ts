import { Module } from '@nestjs/common';
import { GsignV2Controller } from './gsign-v2.controller';

@Module({
  controllers: [GsignV2Controller]
})
export class GsignV2Module {}

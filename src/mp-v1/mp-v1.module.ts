import { Module } from '@nestjs/common';
import { MpV1Controller } from './mp-v1.controller';

@Module({
  controllers: [MpV1Controller]
})
export class MpV1Module {}

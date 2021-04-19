import { Module } from '@nestjs/common';
import { AoV2Controller } from './ao-v2.controller';

@Module({
  controllers: [AoV2Controller]
})
export class AoV2Module {}

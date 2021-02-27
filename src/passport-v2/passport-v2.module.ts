import { Module } from '@nestjs/common';
import { PassportV2Controller } from './passport-v2.controller';

@Module({
  controllers: [PassportV2Controller],
})
export class PassportV2Module {}

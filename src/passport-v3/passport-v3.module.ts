import { Module } from '@nestjs/common';
import { PassportV3Controller } from './passport-v3.controller';

@Module({
  controllers: [PassportV3Controller]
})
export class PassportV3Module {}

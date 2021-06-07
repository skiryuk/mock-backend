import { Module } from '@nestjs/common';
import { AoV3Controller } from './ao-v3.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [AoV3Controller],
  imports: [ConfigModule],
})
export class AoV3Module {}

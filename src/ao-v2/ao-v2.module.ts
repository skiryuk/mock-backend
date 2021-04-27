import { Module } from '@nestjs/common';
import { AoV2Controller } from './ao-v2.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [AoV2Controller],
  imports: [ConfigModule],
})
export class AoV2Module {}

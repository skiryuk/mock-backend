import { Module } from '@nestjs/common';
import { ContractsV3Controller } from './contracts-v3.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [ContractsV3Controller],
  imports: [ConfigModule],
})
export class ContractsV3Module {}

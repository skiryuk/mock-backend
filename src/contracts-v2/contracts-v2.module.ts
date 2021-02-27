import { Module } from '@nestjs/common';
import { ContractsV2Controller } from './contracts-v2.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [ContractsV2Controller],
  imports: [ConfigModule],
})
export class ContractsV2Module {}

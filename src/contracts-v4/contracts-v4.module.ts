import { Module } from '@nestjs/common';
import { ContractsV4Controller } from './contracts-v4.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [ContractsV4Controller],
  imports: [ConfigModule]
})
export class ContractsV4Module {}

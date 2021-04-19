import { Module } from '@nestjs/common';
import { ContractsV1Controller } from './contracts-v1.controller';

@Module({
  controllers: [ContractsV1Controller]
})
export class ContractsV1Module {}

import { Module } from '@nestjs/common';
import { CaseV2Controller } from './case-v2.controller';

@Module({
  controllers: [CaseV2Controller]
})
export class CaseV2Module {}

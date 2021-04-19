import { Module } from '@nestjs/common';
import { CasesV2Controller } from './cases-v2.controller';

@Module({
  controllers: [CasesV2Controller]
})
export class CasesV2Module {}

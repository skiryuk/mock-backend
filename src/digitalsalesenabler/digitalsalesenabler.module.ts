import { Module } from '@nestjs/common';
import { DigitalsalesenablerController } from './digitalsalesenabler.controller';

@Module({
  controllers: [DigitalsalesenablerController]
})
export class DigitalsalesenablerModule {}

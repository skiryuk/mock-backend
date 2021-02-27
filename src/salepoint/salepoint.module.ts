import { Module } from '@nestjs/common';
import { SalepointController } from './salepoint.controller';

@Module({
  controllers: [SalepointController]
})
export class SalepointModule {}

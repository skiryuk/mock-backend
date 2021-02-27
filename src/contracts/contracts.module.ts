import { Module } from '@nestjs/common';
import { ContractsController } from './contracts.controller';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [ContractsController],
  imports: [ConfigModule],
})
export class ContractsModule {}

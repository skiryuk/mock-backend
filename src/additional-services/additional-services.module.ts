import { Module } from '@nestjs/common';
import { AdditionalServicesController } from './additional-services.controller';

@Module({
  controllers: [AdditionalServicesController]
})
export class AdditionalServicesModule {}

import { Module } from '@nestjs/common';
import { RegistrationpointController } from './registrationpoint.controller';

@Module({
  controllers: [RegistrationpointController]
})
export class RegistrationpointModule {}

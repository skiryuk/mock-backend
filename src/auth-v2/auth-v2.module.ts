import { Module } from '@nestjs/common';
import { AuthV2Controller } from './auth-v2.controller';

@Module({
  controllers: [AuthV2Controller]
})
export class AuthV2Module {}

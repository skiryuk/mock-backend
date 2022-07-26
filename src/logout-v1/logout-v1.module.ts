import { Module } from '@nestjs/common';
import { LogoutV1Controller } from './logout-v1.controller';

@Module({
  controllers: [LogoutV1Controller]
})
export class LogoutV1Module {}

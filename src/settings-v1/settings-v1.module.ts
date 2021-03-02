import { Module } from '@nestjs/common';
import { SettingsV1Controller } from './settings-v1.controller';

@Module({
  controllers: [SettingsV1Controller]
})
export class SettingsV1Module {}

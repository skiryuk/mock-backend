import { Module } from '@nestjs/common';
import { NotifyV1Controller } from './notify-v1.controller';

@Module({
  controllers: [NotifyV1Controller]
})
export class NotifyV1Module {}

import { Module } from '@nestjs/common';
import { AoV1Controller } from './ao-v1.controller';

@Module({
  controllers: [AoV1Controller]
})
export class AoV1Module {}

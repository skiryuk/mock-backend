import { Module } from '@nestjs/common';
import { AoV4Controller } from './ao-v4.controller';

@Module({
  controllers: [AoV4Controller]
})
export class AoV4Module {}

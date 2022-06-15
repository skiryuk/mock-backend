import { Module } from '@nestjs/common';
import { RegistryV2Controller } from './registry-v2.controller';

@Module({
  controllers: [RegistryV2Controller]
})
export class RegistryV2Module {}

import { Module } from '@nestjs/common';
import { SnmpV2Controller } from './snmp-v2.controller';

@Module({
  controllers: [SnmpV2Controller]
})
export class SnmpV2Module {}

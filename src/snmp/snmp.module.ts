import { Module } from '@nestjs/common';
import { SnmpController } from './snmp.controller';

@Module({
  controllers: [SnmpController]
})
export class SnmpModule {}

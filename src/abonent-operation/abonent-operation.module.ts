import { Module } from '@nestjs/common';
import { AbonentOperationController } from './abonent-operation.controller';

@Module({
  controllers: [AbonentOperationController]
})
export class AbonentOperationModule {}

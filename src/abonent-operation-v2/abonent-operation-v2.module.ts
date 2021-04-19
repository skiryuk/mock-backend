import { Module } from '@nestjs/common';
import { AbonentOperationV2Controller } from './abonent-operation-v2.controller';

@Module({
  controllers: [AbonentOperationV2Controller]
})
export class AbonentOperationV2Module {}

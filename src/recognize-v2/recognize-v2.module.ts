import { Module } from '@nestjs/common';
import { RecognizeV2Controller } from './recognize-v2.controller';

@Module({
  controllers: [RecognizeV2Controller]
})
export class RecognizeV2Module {}

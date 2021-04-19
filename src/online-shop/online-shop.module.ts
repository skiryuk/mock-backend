import { Module } from '@nestjs/common';
import { OnlineShopController } from './online-shop.controller';

@Module({
  controllers: [OnlineShopController]
})
export class OnlineShopModule {}

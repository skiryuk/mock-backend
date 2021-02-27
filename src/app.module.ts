import { Module } from '@nestjs/common';
import { ContractsModule } from './contracts/contracts.module';
import { ContractsV2Module } from './contracts-v2/contracts-v2.module';
import { AuthModule } from './auth/auth.module';
import { AuthV2Module } from './auth-v2/auth-v2.module';
import { SalepointModule } from './salepoint/salepoint.module';
import { NewsModule } from './news/news.module';
import { SignatureModule } from './signature/signature.module';
import { RegistrationpointModule } from './registrationpoint/registrationpoint.module';
import { ConfigModule } from './config/config.module';
import { DigitalsalesenablerModule } from './digitalsalesenabler/digitalsalesenabler.module';
import { PassportV2Module } from './passport-v2/passport-v2.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ContractsModule,
    ContractsV2Module,
    AuthModule,
    AuthV2Module,
    SalepointModule,
    NewsModule,
    SignatureModule,
    RegistrationpointModule,
    ConfigModule,
    DigitalsalesenablerModule,
    PassportV2Module,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

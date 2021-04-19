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
import { SettingsModule } from './settings/settings.module';
import { SettingsV1Module } from './settings-v1/settings-v1.module';
import { ContractsV3Module } from './contracts-v3/contracts-v3.module';
import { SnmpModule } from './snmp/snmp.module';
import { SnmpV2Module } from './snmp-v2/snmp-v2.module';
import { AoV2Module } from './ao-v2/ao-v2.module';
import { GsignV2Module } from './gsign-v2/gsign-v2.module';
import { AbonentOperationModule } from './abonent-operation/abonent-operation.module';
import { AbonentOperationV2Module } from './abonent-operation-v2/abonent-operation-v2.module';
import { DocumentsModule } from './documents/documents.module';
import { RecognizeV2Module } from './recognize-v2/recognize-v2.module';
import { MpV1Module } from './mp-v1/mp-v1.module';

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
    SettingsModule,
    SettingsV1Module,
    ContractsV3Module,
    SnmpModule,
    SnmpV2Module,
    AoV2Module,
    GsignV2Module,
    AbonentOperationModule,
    AbonentOperationV2Module,
    DocumentsModule,
    RecognizeV2Module,
    MpV1Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

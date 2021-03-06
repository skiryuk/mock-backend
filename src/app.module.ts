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
import { CasesModule } from './cases/cases.module';
import { CasesV2Module } from './cases-v2/cases-v2.module';
import { AdditionalServicesModule } from './additional-services/additional-services.module';
import { ContractsV1Module } from './contracts-v1/contracts-v1.module';
import { OnlineShopModule } from './online-shop/online-shop.module';
import { CaseV2Module } from './case-v2/case-v2.module';
import { RegistryModule } from './registry/registry.module';
import { ManagementModule } from './management/management.module';
import { DealersModule } from './dealers/dealers.module';
import { SalepointV2Module } from './salepoint-v2/salepoint-v2.module';
import { AoV3Module } from './ao-v3/ao-v3.module';
import { NotifyV1Module } from './notify-v1/notify-v1.module';
import { AoV1Module } from './ao-v1/ao-v1.module';

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
    CasesModule,
    CasesV2Module,
    AdditionalServicesModule,
    ContractsV1Module,
    OnlineShopModule,
    CaseV2Module,
    RegistryModule,
    ManagementModule,
    DealersModule,
    SalepointV2Module,
    AoV3Module,
    NotifyV1Module,
    AoV1Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

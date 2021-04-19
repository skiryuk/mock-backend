export interface IGetRegistryList {
  ctn: string;
  searchBy: number;
  dateStart: number;
  dateFinish: number;
  dateTypeCode: number;
  paySystemId: number;
  period: number;
  productTypeCode: number;
  registryId: number;
  dealerCode: string;
  salepointId: number;
  skadPointCode: string;
  statusCode: number;
  dealerPointCode: string;
  statusList: Array<number>;
}

export interface IRegistryCreate {
  paySystemId: number;
  dealerPointCode: string;
  registryType: number;
  sourceType: number;
  productTypeCode: number;
  skadPointCode: string;
  dealerCode: string;
}

export interface IRegistryIncludeContracts {
  registryId: number;
  contractsIds: Array<number>;
}

export interface IRegistryExcludeContracts {
  registryId: number;
  contractsIds: Array<number>;
}

export interface IRegistryGetContractsForInclude {
  registryId: number;
  ctn: string;
  barcode: string;
  dealerPointCodes: Array<string>;
  skadPointCodes: Array<string>;
}

export interface IRegistryContractUpdate {
  contractId: number;
  contractCode: string;
  contractDateAsLong: number;
  customerName: string;
  description: string;
  barcode: string;
}

export interface IRegistryCreateContract {
  registryId: number;
  contractCode: string;
  contractDateAsLong: number;
  customerName: string;
  description: string;
  barcode: string;
}

export interface IRegistryAddConnectionInContract {
  contractId: number;
  phoneNumber: number;
  lastPhoneNumber: number;
  operator: any;
  productSubTypeCode: number;
  tariffPlanSOC: string;
}

export interface IRegistryChangeStatus {
  registryId: number;
  statusCode: number;
  commentStatus: string;
  safePacket: string;
}

export interface IRegistryRemoveConnection {
  contractId: number;
  connectionId: number;
}

export interface IRegistryRemove {
  registryId: number;
}

export interface IRegistryRemoveContract {
  contractId: number;
}

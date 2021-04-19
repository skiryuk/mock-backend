export interface IContractCheckRequest {
  ctn?: string;
  checkCode?: string;
  phoneNumberToMove?: string;
  iccId: string;
}

export interface CreateDraftRequest {
  iccid: string;
  checkCode: string;
  ctn: string;
  ctnPortation: string;
  ctnBeautiful: string;
  soc: string;
  logicalHLR: string;
  customerType: string;
  customerSubType: number;
  paySystem: number;
  contractDate: string;
  actionId: number;
  isFamily: boolean;
}

export interface IContractCheckRequest {
  ctn?: string;
  checkCode?: string;
  phoneNumberToMove?: string;
  iccId: string;
}

export interface ICreateDraftRequest {
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

export interface IContractCheckResponse {
  paySystem: number;
  price?: number;
  startBalance: number;
  ctn?: string;
  iccId: string;
  contractId: number;
  canChangeBillPlan: boolean;
  canUseBeautifulCtn: boolean;
}

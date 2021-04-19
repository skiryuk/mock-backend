export interface IVerificationRequest {
  ctn?: string;
  checkCode: number;
  phoneNumberToMove?: number;
  iccid: number;
}

export interface FilterListRequest {
  orderBy?: Array<PageOrderByClause>;
  filterBy: PageFilterByClause;
  offset: number;
  limit: number;
}

export interface PageOrderByClause {
  field: string;
  desc?: boolean;
}

export interface PageFilterByClause {
  logic?: string;
  items: Array<PageFilterCondition>;
  groups: Array<PageFilterByClause>;
}

export interface PageFilterCondition {
  field: string;
  op: string;
  value: string;
}

export interface ContractListFilterRequest {
  filterBy: PageFilterByClause;
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

export interface ICreateGraphicSignSessionResponse {
  sessionId: string;
  expiration: string;
}

/*export interface IVerificationResponse {
  paySystem: number;
  price?: number;
  startBalance: number;
  ctn?: string;
  iccId: string;
  contractId?: number;
  canBeElectronic: boolean;
  canChangeBillPlan: boolean;
  canUseBeautifulCtn: boolean;
  categories: Array<string>;
}*/

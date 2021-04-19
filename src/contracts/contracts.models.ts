export interface IContractCreateVerificationCheckRes {
  needSMSCode: boolean;
  needEnvelopeCode: boolean;
  ctn: string;
}

export interface IRemoveContractConnectionRequest {
  connectionId: number;
  contractId: number;
}

export interface ISendEContractRegistrationRequest {
  content: string;
}

export interface IGetBillingPlansRequest {
  paySystemTypeCode: number;
}

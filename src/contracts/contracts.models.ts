export interface IContractCreateVerificationCheckRes {
  needSMSCode: boolean;
  needEnvelopeCode: boolean;
  ctn: string;
}

export interface RemoveContractConnectionRequest {
  connectionId: number;
  contractId: number;
}

export interface SendEContractRegistrationRequest {
  content: string;
}

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

export interface ISendContractOpenSmsRequest {
  ctn: string;
}

export interface IConfirmOpenContractBySmsRequest {
  ctn: string;
  transferCtn: string;
  code: string;
}

export interface IUpdateContractConnectionRequest {
  ctnBeautiful: string;
  checkCode: string;
  contractId: number;
  includedServicesIds: Array<number>;
  simId: string;
  tariffPlanSOC: string;
  actionId: number;
  barcode: string;
}

export interface IContractDetailsConnection {
  activationErrorDescription?: string;
  beautifulData: IContractDetailsConnectionBeautifulData;
  billingPlan: IContractDetailsConnectionBillPlan;
  canChangeBillPlan: boolean;
  connectionId: number;
  phoneNumber: string;
  phoneNumberToMove?: string;
  showActivateButton: boolean;
  simId: string;
  barcode: string;
}

export interface IContractDetailsConnectionBeautifulData {
  category: string;
  ctnBeautiful: string;
}

export interface IContractDetailsConnectionBillPlan {
  action?: IContractAd;
  name: string;
  tariffPlanSOC: string;
}

export interface IContractAd {
  category: string;
  description: string;
  errorMessage?: string;
  id: number;
  isAttempt: boolean;
  isAttemptSuccessfull: boolean;
  minimumPayment: number;
  name: string;
  type: number;
}

export interface ICheckCustomerResponse {
  needSMSCode: boolean;
  needEnvelopeCode: boolean;
  iccId: string;
  ctn: string;
}

export interface ICommitAttachmentsRequest {
  contractId: number;
  doRecognizeDocument: boolean;
  scanType: number;
  tid: string;
}

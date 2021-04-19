export interface IAbonentOperType {
  category: number;
  hint: string;
  id: number;
  isPrimary: boolean;
  isSecondary: boolean;
  name: string;
  type: number;
}

export interface ISetTargetOfferAnswerRequest {
  phoneNumber: string;
  campaignId: number;
  campaignGroupId: number;
  campaignType: number;
  campaignName: string;
  campaignSOC: string;
  campaignId1C: number;
  constructorId: number;
  answer: boolean;
  sendSms: boolean;
}

export interface ISmsConfirmationInfoRequest {
  requestId: number;
}

export interface IConfirmSmsRequest {
  smsCode: string;
  requestId: number;
  loading: boolean;
}

export interface IGetAbonentAdBillPlanInfoRequest {
  constructorId: number;
  isConstructor: boolean;
  marketCode: string;
  name: string;
  phone: string;
  soc: string;
}

export interface IConnectAvailableServiceRequest {
  name: string;
  phoneNumber: string;
  soc: string;
}

export interface ISendSmsIdentifyReq {
  requestTypeCode: number;
  ctn: string;
}

export interface ICheckSmsIdentifyReq {
  requestTypeCode: number;
  ctn: string;
}

export interface ICheckTransferNumberReq {
  customerType: number;
  phoneNumberThatIsTransfered: string;
  tmpPhoneNumber: string;
}

export interface ICheckCancelTransferNumberReq {
  customerType: number;
  transferingOperationIdentifier: string;
  phoneNumberThatIsTransfered: string;
}

export interface ITransferingOperationStatusReq {
  phoneNumberThatIsTransfered: string;
  transferingOperationIdentifier: string;
}

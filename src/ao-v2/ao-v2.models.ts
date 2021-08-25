import { EAORefundType, EShareTypes } from './ao-v2.enums';

export interface ICreateGraphicSignSessionResponse {
  sessionId: string;
  expiration: string;
}

export interface IFilterListRequest {
  orderBy?: Array<IPageOrderByClause>;
  filterBy: IPageFilterByClause;
  offset: number;
  limit: number;
}

export interface IPageFilterByClause {
  logic?: string;
  items?: Array<IPageFilterCondition>;
  groups?: Array<IPageFilterByClause>;
}

export interface IPageOrderByClause {
  field: string;
  desc?: boolean;
}

export interface IPageFilterCondition {
  field: string;
  op?: string;
  value?: string;
}

export interface IFilteredClaimsPage {
  totalCount: number;
  items: Array<IClaimItem>;
}

export interface IClaimItem {
  operationId: number;
  type: number;
  category: number;
  statusId: number;
  addDate: string;
  phoneNumber: string;
  statusName: string;
  categoryName: string;
  requestTypeName: string;
}

export interface ICreateAbonentOperationRequest {
  requestTypeCode: number;
  operationType: number;
  customerType: number;
  description?: string;
  abonentData?: IRequestInfoAbonentData;
  requestInfo: IReqInfo;
  primaryRequestId?: number;
  contactPhone?: string;
  extraData?:
    | IAOPaymentTransferExtraData
    | IAORejectionExtraData
    | IAODetalizationExtraData;
}

export interface IRequestInfoAbonentData {
  person: IRequestInfoAbonentDataPerson;
  company: IRequestInfoAbonentDataCompany;
}

export interface IRequestInfoAbonentDataCompany {
  name: string;
  inn: number;
}

export interface IRequestInfoAbonentDataPerson {
  surname: string;
  name: string;
  patronymic: string;
  inn: number;
  document: IRequestInfoAbonentDataPersonDoc;
}

export interface IRequestInfoAbonentDataPersonDoc {
  typeId: number;
  series: number;
  number: number;
  givenBy: string;
  givenDateAsLong?: number;
}

export interface IReqInfo {
  ctn?: string;
  serviceDOL?: string;
  name?: string;
  type?: number;
  soc?: string;
  date?: any;
  billPlanSOC?: string;
  billPlanName?: string;
  discountSOC?: string;
  constructorId?: number;
  campaignId?: number;
  campaignId1C?: number;
  campaignGroupId?: number;
  campaignType?: number;
  campaignName?: string;
  description?: string;
  error?: string;
  servicesToRemove?: Array<string>;
  iccid?: string;
  blockType?: number;
  blockDate?: number;
  ctnPortation?: number;
  datePortation?: number;
  companyAsPerson?: boolean;
  portationIdentifier?: number;
  contactPerson?: string;
  dateFrom?: number;
  dateTo?: number;
  contactPhone?: string;
  dateConsultation?: number;
  vasParameters?: Array<IVasParam>;
  email?: string;
  cancelReason?: string;
  trafficType?: number;
  deliveryType?: number;
  numberUSSS?: string;
  subscriptionType?: string;
  code?: string;
  reasonId?: number;
  number?: number;
  price?: number;
  finalPrice?: number;
  finalDate?: number;
  isPayed?: boolean;
  broadband?: IRequestBroadband;
  contractId?: number;
  address?: string;
  installDate?: number;
  offers?: Array<IUpsellOfferItem>;
  changeBillPlanFirst?: boolean;
  changeBillPlanRequestId?: number;
  inviteType?: string;
  familyRequestId?: number;
  vendorId?: number;
  vendorName?: string;
  policyNumber?: string;
  policyID?: number;
  productName?: string;
  productPrice?: number;
  objectName?: string;
  objectPrice?: number;
  shareType?: EShareTypes;
  ctnAdditional?: any;
  transactionId?: string;
  sessionId?: string;
  errorCode?: string;
  errorMessage?: string;
  isElectronic?: boolean;
  extraData?:
    | IAORejectionExtraData
    | IAODetalizationExtraData
    | IAOPaymentTransferExtraData;
}

export interface IVasParam {
  id: number;
  value: string;
}

export interface IRequestBroadband {
  number?: number;
  date?: number;
  dateFinish?: number;
  clientAddress?: string;
}

export interface IUpsellOfferItem {
  campaignType: number;
  offerName?: string;
  offerDescription?: string;
  name?: string;
  description?: string;
  soc?: string;
  discountSOC?: string;
  isFree: boolean;
  isConstructor?: boolean;
  constructorId?: number;
  extraData?: IExtraData;
  dpcInfo?: IDpcInfo;
  dpcError?: string;
  sortId?: number;
  convergenceInd?: boolean;
  campaignId?: number;
  campaignGroupId?: number;
  changeBillPlanFirst?: boolean;
}

export interface IDpcInfo {
  abonentPay: number;
  abonentUnit: string;
  benefit: string;
  categories: Array<IDpcInfoCategory>;
  connectPay: number;
  connectUnit: string;
  internetPackages: Array<IDpcInfoParameterGroupPack>;
  otherPackages: Array<IDpcInfoParameterGroupPack>;
  parameterGroups: Array<IDpcInfoParameterGroup>;
  sortOrder: number;
  title: string;
}

export interface IDpcInfoParameterGroup {
  parameters: Array<IDpcInfoParameterGroupPack>;
  preOpen: boolean;
  title: string;
}

export interface IDpcInfoParameterGroupPack {
  legal: string;
  numValue: number;
  title: string;
  unit: string;
  value: string;
}

export interface IDpcInfoCategory {
  id: number;
  title: string;
  sortOrder: number;
}

export interface IExtraData {
  baseFeatures?: Array<IExtraDataBaseFeature>;
  category?: string;
  chargeAmount?: any;
  convergenceInd?: boolean;
  nlpAvailablePricePlan?: string;
  rcRate?: any;
  rcRatePeriod?: string;
  rcRatePeriodText?: string;
  sdbSize?: number;
  dailyFee?: number;
  dailyFeeWithoutDiscount?: number;
  discountParams?: IExtraDataDiscountParams;
  rcRateWithoutDiscount?: any;
  descriptionUrl?: string;
  nonPublicOffers?: Array<IExtraData>;
  currencyName?: string;
  fee?: number;
  feePeriod?: number;
  ratePeriodName?: string;
  percentFormatted?: number;
  period?: number;
  expDate?: number;
  currency?: string;
  pay?: number;
  target?: ITargetOffer;
  archiveInd?: boolean;
  effDate?: number;
  removeInd?: string;
  viewInd?: string;
  buyPrice?: number;
  buyPricePeriod?: number;
  buyPricePeriodName?: string;
  endDate?: number;
  endFreeDate?: number;
  indefiniteTime?: boolean;
  providerContact?: string;
  providerName?: string;
  startDate?: number;
  tryBuyMode?: string;
  tryPrice?: number;
  hasDailyPayType?: boolean;
  hasMonthPayType?: boolean;
  dailyKgladFee?: any;
  dailyKgladFeeWithoutDiscount?: number;
  accumulators?: Array<IBillPLanAccumulator>;
}

export interface IBillPLanAccumulator {
  unit: string;
  size: number;
  socClass: string;
}

export interface IExtraDataBaseFeature {
  code: string;
}

export interface IExtraDataDiscountParams {
  baseFeatures: Array<IExtraDataBaseFeature>;
  entityDesc: string;
  entityName: string;
  name: string;
  percent: string;
  period: number;
  publicInd: boolean;
  percentFormatted?: number;
  expDate?: number;
}

export interface ITargetOffer {
  id: number;
  groupId: number;
  name: string;
  description: string;
  score: number;
  typeId: number;
  answer?: boolean;
  soc: string;
  marketCode: string;
  filialName: string;
  extraData: IExtraData;
  constructorInfo: IConstructorInfo;
  constructorId: number;
  campaignId1C?: number;
}

export interface IConstructorInfo {
  filialName: string;
  internet: IConstructorPackDetail;
  sms: IConstructorPackDetail;
  voice: IConstructorPackDetail;
  voiceExternal: IConstructorPackDetail;
  marketCode: string;
}

export interface IConstructorPackDetail {
  value: number;
  default: number;
  modificator: number;
}

export interface IAOExtraData {
  $type: string; // константа "DiscardAgreement",	Тип объекта
}

export interface IAORejectionBalanceRefund {
  type: EAORefundType;
  phoneContractTermination?: string; // CTN, type = phone, not null	Номер телефона Билайн
  internetAccount?: string; // null, 10 цифр; type=broadband, not null	Номер лицевого счёта ШПД
  recipientName?: string; // null	3..100 символов	type=account, not null	ФИО получателя
  accountClient?: string; // null	20 цифр	Номер расчётного счёта получателя
  bic?: string; // null	9 цифр	БИК банка
  inn?: string; // null	10 цифр	ИНН банка
}

export interface IAORejectionExtraData extends IAOExtraData {
  contractTerminationDate: string; // "yyyy-MM-dd"	Дата расторжения, не ранее даты создания заявки
  reason: string; // справочник причина расторжения
  balanceRefund: IAORejectionBalanceRefund;
}

export interface IAODetalizationExtraData extends IAOExtraData {
  accountWriteOff: string; // not null	3..20 символов	Счёт для списания
}

export interface IAOPaymentTransferExtraData extends IAOExtraData {
  wrongDate: string; // not null	"yyyy-MM-dd"	Дата ошибочного платежа. Не позднее текущей даты и не раньше 1 года от текущей даты
  wrongSumPay: number; // not null	#.##	Сумма ошибочного платежа. Должно быть больше 0 и меньше 1000000, после запятой не более 2-х знаков
  wrongPhone: string; // not null	CTN	Номер телефона, на который совершен ошибочный платеж
  correctPhone: string; // not null	CTN	Номер телефона, на который необходимо перенаправить платеж
}

export interface ICheckTransferNumberReq {
  customerType: number;
  phoneNumberThatIsTransfered: string;
  tmpPhoneNumber: string;
}

export interface ICheckRequestReq {
  requestType: number;
  ctn: string;
}

export interface IReserveEsimReq {
  ctn: string;
}

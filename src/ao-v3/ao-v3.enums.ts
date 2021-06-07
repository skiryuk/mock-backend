export enum EShareTypes {
  SDB = 'SDB',
  SEB = 'SEB',
}

export enum EAORefundType {
  CASH = 'cash', // Наличными в собственном офисе *
  PHONE = 'phone', // На номер телефона «Билайн»
  BROADBAND = 'broadband', // На лицевой счёт широкополосного интернета «Билайн»
  ACCOUNT = 'account', // На банковские реквизиты
}

export enum EAOExtraDataTypes {
  DiscardAgreement = 'DiscardAgreement',
  Detalization = 'Detalization',
  IncorrectPaymentTransfer = 'IncorrectPaymentTransfer',
}

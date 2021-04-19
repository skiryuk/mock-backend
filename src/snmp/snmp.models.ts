export interface IGetBonusOrderListRequest {
  startDate: number;
  endDate: number;
}

export interface IGetBalanceDetailListRequest {
  startDate: number;
  endDate: number;
}

export interface IAddBonusRequest {
  autoAssign: boolean;
  bonusId: string;
  ctn: string;
}

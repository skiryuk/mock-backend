export interface IDealerUpdateAdditionalInfo {
  canHaveSubDealers: boolean;
  dealerCode: string;
}

export interface IDealerInfo {
  dealerCode: string;
  canHaveSubDealers: boolean;
  isTargetOffer: boolean;
  isConvergence: boolean;
  isAntivirus: boolean;
  isInternetShop: boolean;
  isBroadband: boolean;
  isPaperRequestMNP: boolean;
  isElectronicRequestMNP: boolean;
  marketCode: string;
  filialName: string;
  channel: number;
}

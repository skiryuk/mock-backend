export interface GetBeautifulNumbersPageRequest {
  categories: Array<string>;
  logicalHLR?: string;
  defCode?: number;
  sim: string;
  phoneNumber?: string;
}

export interface GetDefCodesRequest {
  sim: string;
}

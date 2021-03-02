export interface Config {
  contracts: ContractsConfig;
}

export interface ContractsConfig {
  mode: string;
  kit: string;
  mnp: boolean;
}

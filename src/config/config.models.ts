export interface Config {
  contracts: ContractsConfig;
  ao: AoConfig;
}

export interface ContractsConfig {
  mode: string;
  kit: string;
  mnp: boolean;
}

export interface AoConfig {
  type: number;
}

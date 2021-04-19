export interface ICheckUpgradeRequest {
  os: string;
  version: string;
}

export interface ISendInstallDetailsRequest {
  oldVersion: string;
  newVersion: string;
  os: string;
  instanceId: string;
}

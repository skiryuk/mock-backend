export interface IAppealPageFilterListReq {
  filterState: IAppealPageExtraFilterState;
  state: IAppealPageFilterState;
  page: number;
  pageSize: number;
}

export interface IAppealPageExtraFilterState {
  isRead: boolean;
}

export interface IAppealPageFilterState {
  page: number;
  pageSize: number;
  filter: string;
}

export interface IAddMessageRequest {
  message: string;
}

export interface ICreateAppealReq {
  attachments: Array<IAppealAttachFile>;
  description: string;
  email: string;
  subtopicId: number;
  topicId: number;
  versions: Array<IVersionInfo>;
}

export interface IAppealAttachFile {
  mimeType: string;
  originalName: string;
  path: string;
  size: number;
  type: string;
}

export interface IVersionInfo {
  name: string;
  version: string;
}
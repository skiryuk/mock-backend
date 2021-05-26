export interface ISalepointListRequest {
  orderBy: Array<IPageOrderByClause>;
  filterBy: IPageFilterByClause;
  offset: number;
  limit: number;
}

export interface IPageOrderByClause {
  field: string;
  desc: boolean;
}

export interface IPageFilterByClause {
  logic: string;
  items: Array<IPageFilterCondition>;
  groups: Array<IPageFilterByClause>;
}

export interface IPageFilterCondition {
  field: string;
  op: string;
  value: string;
}

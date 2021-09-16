
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum FilterByLogic {
    AND = "AND",
    OR = "OR"
}

export enum FilterByOperator {
    ANY = "ANY",
    CONTAINS = "CONTAINS",
    ENDS_WITH = "ENDS_WITH",
    EQ = "EQ",
    GT = "GT",
    GTE = "GTE",
    LT = "LT",
    LTE = "LTE",
    NEQ = "NEQ",
    NOT_ANY = "NOT_ANY",
    NOT_CONTAINS = "NOT_CONTAINS",
    NOT_ENDS_WITH = "NOT_ENDS_WITH",
    NOT_STARTS_WITH = "NOT_STARTS_WITH",
    STARTS_WITH = "STARTS_WITH"
}

export enum StatusAcrmEnum {
    ALLOWED = "ALLOWED",
    DEFAULT = "DEFAULT",
    FORBIDDEN = "FORBIDDEN",
    TEMPORARILY_FORBIDDEN = "TEMPORARILY_FORBIDDEN"
}

export class ContractListRequestModelInput {
    filterBy?: Nullable<FilterByGroupModelInput>;
    limit: number;
    offset: number;
    orderBy?: Nullable<OrderByModelInput[]>;
}

export class FilterByGroupModelInput {
    groups: FilterByGroupModelInput[];
    items: FilterByModelInput[];
    logic: FilterByLogic;
}

export class FilterByModelInput {
    field: string;
    op: FilterByOperator;
    value?: Nullable<string>;
}

export class FilterRequestModelInput {
    filterBy?: Nullable<FilterByGroupModelInput>;
    limit: number;
    offset: number;
    orderBy?: Nullable<OrderByModelInput[]>;
}

export class OrderByModelInput {
    desc: boolean;
    field: string;
}

export class ContractItemBillPlanModel {
    name: string;
    soc: string;
}

export class ContractItemConnectionModel {
    billPlan?: Nullable<ContractItemBillPlanModel>;
    canChangeBillPlan: boolean;
    connectionId: number;
    ctn?: Nullable<string>;
    ctnPortation?: Nullable<string>;
    firstUseDate?: Nullable<DateTime>;
    iccid: string;
    isActivated: boolean;
    scoringInfo?: Nullable<ContractItemScoringInfoModel>;
}

export class ContractItemModel {
    addDate: DateTime;
    barcode?: Nullable<string>;
    connections: ContractItemConnectionModel[];
    contractCode: string;
    contractDate: string;
    contractId: number;
    ctn?: Nullable<string>;
    dealerCode: string;
    dealerPointCode: string;
    editDate?: Nullable<DateTime>;
    hasScans: boolean;
    iccid?: Nullable<string>;
    isElectronic: boolean;
    isImportedFromUAPI: boolean;
    isLocked: boolean;
    isSelfRegistration: boolean;
    isSelfRegistrationDOL: boolean;
    login?: Nullable<string>;
    registrationDate?: Nullable<DateTime>;
    skadPointCode?: Nullable<string>;
    skadPointName?: Nullable<string>;
    status: number;
    statusAcrm: StatusAcrmEnum;
    statusDate: DateTime;
    statusName: string;
    statusReason?: Nullable<string>;
}

export class ContractItemScoringInfoModel {
    description: string;
    interval: number;
}

export class DealerInfoResponseV2Model {
    canHaveSubDealers: boolean;
    channel?: Nullable<number>;
    dealerCode?: Nullable<string>;
    filialName: string;
    id: Long;
    isActive: boolean;
    isAntivirus: boolean;
    isBroadband: boolean;
    isConvergence: boolean;
    isInternetShop: boolean;
    isSellerLinked: boolean;
    isTargetOffer: boolean;
    marketCode: string;
    name: string;
    updateDate?: Nullable<DateTime>;
}

export class LocationModel {
    id: Long;
    name: string;
    parentId?: Nullable<Long>;
    parentName?: Nullable<string>;
    typeId: Long;
    typeName: string;
    weight: number;
}

export class PagingResponseModelOfContractItemModel {
    items: ContractItemModel[];
    totalCount: number;
}

export abstract class IQuery {
    abstract contractList(model: ContractListRequestModelInput): PagingResponseModelOfContractItemModel | Promise<PagingResponseModelOfContractItemModel>;

    abstract salePointHistory(model: FilterRequestModelInput): SalePointsHistoryResponseModel | Promise<SalePointsHistoryResponseModel>;

    abstract salePoints(model: FilterRequestModelInput): SalesPointListResponseModel | Promise<SalesPointListResponseModel>;
}

export class SalePointsHistoryResponseModel {
    items: SalesPointHistoryItemV2Model[];
    totalCount: number;
}

export class SalesPointHistoryItemV2Model {
    addressNotes?: Nullable<string>;
    brandingType?: Nullable<Long>;
    channel: Long;
    cluster?: Nullable<Long>;
    code: string;
    codeAmdocs?: Nullable<string>;
    dealer?: Nullable<DealerInfoResponseV2Model>;
    dealerId?: Nullable<Long>;
    house: string;
    id: Long;
    isActive: boolean;
    isHidden: boolean;
    lastAuthDate: DateTime;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
    name: string;
    owner?: Nullable<string>;
    phones?: Nullable<string>;
    role: Long;
    street: StreetModel;
    streetId: Long;
    updateDate?: Nullable<DateTime>;
}

export class SalesPointListItemResponseModel {
    addressNotes?: Nullable<string>;
    brandingType?: Nullable<Long>;
    channel: Long;
    cluster?: Nullable<Long>;
    code: string;
    codeAmdocs?: Nullable<string>;
    dealer?: Nullable<DealerInfoResponseV2Model>;
    dealerId?: Nullable<Long>;
    house: string;
    id: Long;
    isActive: boolean;
    isSellerLinked: boolean;
    lat?: Nullable<number>;
    lng?: Nullable<number>;
    name: string;
    owner?: Nullable<string>;
    phones?: Nullable<string>;
    street: StreetModel;
    streetId: Long;
    updateDate?: Nullable<DateTime>;
}

export class SalesPointListResponseModel {
    items: SalesPointListItemResponseModel[];
    totalCount: number;
}

export class StreetModel {
    id: Long;
    location: LocationModel;
    locationId: Long;
    name: string;
    typeId: Long;
    typeName: string;
}

export type DateTime = any;
export type Long = any;
type Nullable<T> = T | null;

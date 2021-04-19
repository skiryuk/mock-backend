export interface ICheckAbonentOperationDataReq {
  requestTypeCode: number;
  customerType: number;
  phoneNumber?: string;
  abonentData: ICheckAbonentData;
}

export interface ICheckAbonentData {
  person: ICheckAbonentDataPerson;
  company: IRequestInfoAbonentDataCompany;
}

export interface ICheckAbonentDataPerson {
  surname: string;
  name: string;
  patronymic: string;
  inn: number;
  document: ICheckAbonentDataPersonDoc;
}

export interface ICheckAbonentDataPersonDoc {
  typeId: number;
  series: number;
  number: number;
  givenBy: string;
  givenDate?: string;
}

export interface IRequestInfoAbonentDataCompany {
  name: string;
  inn: number;
}

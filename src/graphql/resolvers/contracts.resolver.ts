import { Query, ResolveField, Resolver } from '@nestjs/graphql';

import * as GET_FILTERED_CONTRACTS_LIST_MOCK from './data/get-filtered-contracts-list.json';
import { PagingResponseModelOfContractItemModel } from '../graphql';

@Resolver()
export class ContractsResolver {
  constructor() {}

  @Query()
  async contractList() {
    const mock = GET_FILTERED_CONTRACTS_LIST_MOCK as PagingResponseModelOfContractItemModel;
    return mock;
  }

  /*@ResolveField()
  async contractList() {
    const mock = GET_FILTERED_CONTRACTS_LIST_MOCK as PagingResponseModelOfContractItemModel;
    return mock;
  }*/
}

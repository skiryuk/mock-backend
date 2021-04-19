import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import {
  IGetRegistryList,
  IRegistryAddConnectionInContract,
  IRegistryContractUpdate,
  IRegistryCreate,
  IRegistryCreateContract,
  IRegistryExcludeContracts,
  IRegistryGetContractsForInclude,
  IRegistryIncludeContracts,
  IRegistryRemove,
  IRegistryRemoveConnection,
  IRegistryRemoveContract,
} from './registry.models';

import * as GET_PRODUCT_TYPES_MOCK from './data/get-product-types.json';
import * as GET_REGISTRY_STATUSES_MOCK from './data/get-registry-statuses.json';
import * as GET_REGISTRY_CONTRACT_STATUSES_MOCK from './data/get-registry-contract-statuses.json';
import * as GET_REGISTRY_LIST_MOCK from './data/get-registry-list.json';
import * as CREATE_REGISTRY_MOCK from './data/create-registry.json';
import * as GET_REGISTRY_DETAILS_MOCK from './data/get-registry-details.json';
import * as GET_REGISTRY_HISTORY_MOCK from './data/get-registry-history.json';
import * as GET_CONTRACTS_FOR_INCLUDE_MOCK from './data/get-contract-list-for-include.json';
import * as CREATE_CONTRACT_MOCK from './data/create-contract.json';
import * as ADD_CONNECTION_TO_AGREEMENT_MOCK from './data/add-connection-to-agreement.json';
import * as REMOVE_REGISTRY_MOCK from './data/remove-registry.json';
import * as REMOVE_REGISTRY_CONTRACT_MOCK from './data/remove-registry-contract.json';

@Controller('registry')
export class RegistryController {
  @Get('getProductTypes')
  public async getProductTypes(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_PRODUCT_TYPES_MOCK);
  }
  @Get('getRegistryStatuses')
  public async getRegistryStatuses(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_REGISTRY_STATUSES_MOCK);
  }
  @Get('getRegistryContractStatuses')
  public async getRegistryContractStatuses(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(GET_REGISTRY_CONTRACT_STATUSES_MOCK);
  }
  @Post('getRegistryList')
  public async getRegistryList(
    @Body() req: IGetRegistryList,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_REGISTRY_LIST_MOCK);
  }
  @Post('create')
  public async createRegistry(
    @Body() req: IRegistryCreate,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_REGISTRY_MOCK);
  }
  @Get('getRegistryDetails')
  public async getRegistryDetails(
    @Query('registryId') registryId: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_REGISTRY_DETAILS_MOCK);
  }
  @Get('getRegistryHistory')
  public async getRegistryHistory(
    @Query('registryId') registryId: number,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_REGISTRY_HISTORY_MOCK);
  }
  @Post('getContractListForInclude')
  public async getContractListForInclude(
    @Body() req: IRegistryGetContractsForInclude,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(GET_CONTRACTS_FOR_INCLUDE_MOCK);
  }

  @Post('includeAgreementsToRegistry')
  public async includeAgreementsToRegistry(
    @Body() req: IRegistryIncludeContracts,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Post('excludeContractsFromRegistry')
  public async excludeContractsFromRegistry(
    @Body() req: IRegistryExcludeContracts,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Post('updateContract')
  public async updateContract(
    @Body() req: IRegistryContractUpdate,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Post('delConnectionFromAgreement')
  public async removeConnection(
    @Body() req: IRegistryRemoveConnection,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Post('createContract')
  public async createContract(
    @Body() req: IRegistryCreateContract,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(CREATE_CONTRACT_MOCK);
  }

  @Post('addConnectionToAgreement')
  public async addConnectionToAgreement(
    @Body() req: IRegistryAddConnectionInContract,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(ADD_CONNECTION_TO_AGREEMENT_MOCK);
  }

  @Get('changeRegistryStatus')
  public async changeRegistryStatus(
    @Query('registryId') registryId: number,
    @Query('statusCode') statusCode: number,
    @Query('commentStatus') commentStatus: string,
    @Query('safePacket') safePacket: string,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }

  @Post('deleteRegistry')
  public async removeRegistry(
    @Body() req: IRegistryRemove,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(REMOVE_REGISTRY_MOCK);
  }

  @Post('deleteContract')
  public async removeRegistryContract(
    @Body() req: IRegistryRemoveContract,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.OK).json(REMOVE_REGISTRY_CONTRACT_MOCK);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { RegistryV2Controller } from './registry-v2.controller';

describe('RegistryV2Controller', () => {
  let controller: RegistryV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistryV2Controller],
    }).compile();

    controller = module.get<RegistryV2Controller>(RegistryV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

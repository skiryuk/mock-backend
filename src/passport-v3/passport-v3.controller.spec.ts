import { Test, TestingModule } from '@nestjs/testing';
import { PassportV3Controller } from './passport-v3.controller';

describe('PassportV3Controller', () => {
  let controller: PassportV3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassportV3Controller],
    }).compile();

    controller = module.get<PassportV3Controller>(PassportV3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

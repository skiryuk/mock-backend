import { Test, TestingModule } from '@nestjs/testing';
import { LogoutV1Controller } from './logout-v1.controller';

describe('LogoutV1Controller', () => {
  let controller: LogoutV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogoutV1Controller],
    }).compile();

    controller = module.get<LogoutV1Controller>(LogoutV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

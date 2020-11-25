import { Test, TestingModule } from '@nestjs/testing';
import { StocksResolver } from './stocks.resolver';
import { StocksService } from './stocks.service';

describe('StocksResolver', () => {
  let resolver: StocksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StocksResolver, StocksService],
    }).compile();

    resolver = module.get<StocksResolver>(StocksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

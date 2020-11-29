import { Test, TestingModule } from '@nestjs/testing';
import { PurchasedStocksResolver } from './purchased-stocks.resolver';
import { PurchasedStocksService } from './purchased-stocks.service';

describe('PurchasedStocksResolver', () => {
  let resolver: PurchasedStocksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasedStocksResolver, PurchasedStocksService],
    }).compile();

    resolver = module.get<PurchasedStocksResolver>(PurchasedStocksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

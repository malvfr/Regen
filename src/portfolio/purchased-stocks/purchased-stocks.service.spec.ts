import { Test, TestingModule } from '@nestjs/testing';
import { PurchasedStocksService } from './purchased-stocks.service';

describe('PurchasedStocksService', () => {
  let service: PurchasedStocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasedStocksService],
    }).compile();

    service = module.get<PurchasedStocksService>(PurchasedStocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

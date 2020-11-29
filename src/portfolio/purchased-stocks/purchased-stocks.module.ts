import { Module } from '@nestjs/common';
import { PurchasedStocksService } from './purchased-stocks.service';
import { PurchasedStocksResolver } from './purchased-stocks.resolver';

@Module({
  providers: [PurchasedStocksResolver, PurchasedStocksService]
})
export class PurchasedStocksModule {}

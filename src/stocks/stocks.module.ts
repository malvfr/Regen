import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksResolver } from './stocks.resolver';

@Module({
  providers: [StocksResolver, StocksService]
})
export class StocksModule {}

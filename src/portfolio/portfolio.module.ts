import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioResolver } from './portfolio.resolver';

@Module({
  providers: [PortfolioResolver, PortfolioService]
})
export class PortfolioModule {}

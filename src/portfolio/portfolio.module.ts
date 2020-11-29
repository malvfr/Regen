import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioResolver } from './portfolio.resolver';
import Portfolio from './model/portfolio.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PortfolioResolver, PortfolioService],
  imports: [TypeOrmModule.forFeature([Portfolio])],
})
export class PortfolioModule {}

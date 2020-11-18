import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioResolver } from './portfolio.resolver';
import { PortfolioService } from './portfolio.service';

describe('PortfolioResolver', () => {
  let resolver: PortfolioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfolioResolver, PortfolioService],
    }).compile();

    resolver = module.get<PortfolioResolver>(PortfolioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

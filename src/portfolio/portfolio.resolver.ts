import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from './entities/portfolio.entity';
import { CreatePortfolioInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';

@Resolver(() => Portfolio)
export class PortfolioResolver {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Mutation(() => Portfolio)
  createPortfolio(
    @Args('createPortfolioInput') createPortfolioInput: CreatePortfolioInput,
  ) {
    return this.portfolioService.create(createPortfolioInput);
  }

  @Query(() => [Portfolio], { name: 'getAllPortfolios' })
  async findAll() {
    return await this.portfolioService.findAll();
  }

  @Query(() => Portfolio, { name: 'getPortfolio' })
  async findOne(@Args('id', { type: () => String }) uuid: string) {
    try {
      return await this.portfolioService.findOne(uuid);
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => Portfolio)
  updatePortfolio(
    @Args('updatePortfolioInput') updatePortfolioInput: UpdatePortfolioInput,
  ) {
    return this.portfolioService.update(
      updatePortfolioInput.id,
      updatePortfolioInput,
    );
  }

  @Mutation(() => Portfolio)
  removePortfolio(@Args('id', { type: () => Int }) id: number) {
    return this.portfolioService.remove(id);
  }
}

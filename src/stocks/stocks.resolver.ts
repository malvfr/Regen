import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StocksService } from './stocks.service';
import { Stock } from './entities/stock.entity';
import { CreateStockInput } from './dto/create-stock.input';
import { UpdateStockInput } from './dto/update-stock.input';

@Resolver(() => Stock)
export class StocksResolver {
  constructor(private readonly stocksService: StocksService) {}

  @Mutation(() => Stock)
  createStock(@Args('createStockInput') createStockInput: CreateStockInput) {
    return this.stocksService.create(createStockInput);
  }

  @Query(() => [Stock], { name: 'stocks' })
  findAll() {
    return this.stocksService.findAll();
  }

  @Query(() => Stock, { name: 'stock' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stocksService.findOne(id);
  }

  @Mutation(() => Stock)
  updateStock(@Args('updateStockInput') updateStockInput: UpdateStockInput) {
    return this.stocksService.update(updateStockInput.id, updateStockInput);
  }

  @Mutation(() => Stock)
  removeStock(@Args('id', { type: () => Int }) id: number) {
    return this.stocksService.remove(id);
  }
}

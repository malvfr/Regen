import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PurchasedStocksService } from './purchased-stocks.service';
import { PurchasedStock } from './entities/purchased-stock.entity';
import { CreatePurchasedStockInput } from './dto/create-purchased-stock.input';
import { UpdatePurchasedStockInput } from './dto/update-purchased-stock.input';

@Resolver(() => PurchasedStock)
export class PurchasedStocksResolver {
  constructor(
    private readonly purchasedStocksService: PurchasedStocksService,
  ) {}

  @Mutation(() => PurchasedStock)
  createPurchasedStock(
    @Args('createPurchasedStockInput')
    createPurchasedStockInput: CreatePurchasedStockInput,
  ) {
    return this.purchasedStocksService.create(createPurchasedStockInput);
  }

  @Query(() => [PurchasedStock], { name: 'purchasedStocks' })
  findAll() {
    return this.purchasedStocksService.findAll();
  }

  @Query(() => PurchasedStock, { name: 'purchasedStock' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.purchasedStocksService.findOne(id);
  }

  @Mutation(() => PurchasedStock)
  updatePurchasedStock(
    @Args('updatePurchasedStockInput')
    updatePurchasedStockInput: UpdatePurchasedStockInput,
  ) {
    return this.purchasedStocksService.update(
      updatePurchasedStockInput.id,
      updatePurchasedStockInput,
    );
  }

  @Mutation(() => PurchasedStock)
  removePurchasedStock(@Args('id', { type: () => Int }) id: number) {
    return this.purchasedStocksService.remove(id);
  }
}

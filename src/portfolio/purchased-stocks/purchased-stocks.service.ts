import { Injectable } from '@nestjs/common';
import { CreatePurchasedStockInput } from './dto/create-purchased-stock.input';
import { UpdatePurchasedStockInput } from './dto/update-purchased-stock.input';

@Injectable()
export class PurchasedStocksService {
  create(createPurchasedStockInput: CreatePurchasedStockInput) {
    return 'This action adds a new purchasedStock';
  }

  findAll() {
    return `This action returns all purchasedStocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchasedStock`;
  }

  update(id: number, updatePurchasedStockInput: UpdatePurchasedStockInput) {
    return `This action updates a #${id} purchasedStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchasedStock`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateStockInput } from './dto/create-stock.input';
import { UpdateStockInput } from './dto/update-stock.input';

@Injectable()
export class StocksService {
  create(createStockInput: CreateStockInput) {
    return 'This action adds a new stock';
  }

  findAll() {
    return `This action returns all stocks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number, updateStockInput: UpdateStockInput) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}

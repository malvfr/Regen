import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchasedStockInput } from './create-purchased-stock.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePurchasedStockInput extends PartialType(CreatePurchasedStockInput) {
  @Field(() => Int)
  id: number;
}
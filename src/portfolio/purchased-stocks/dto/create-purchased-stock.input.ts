import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePurchasedStockInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
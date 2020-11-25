import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStockInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePortfolioInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

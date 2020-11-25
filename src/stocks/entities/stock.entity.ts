import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stock {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

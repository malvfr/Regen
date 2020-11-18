import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Portfolio {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

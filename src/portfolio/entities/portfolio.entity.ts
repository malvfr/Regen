import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Portfolio {
  @Field(() => String, { description: `Portfolio's name` })
  name: string;

  @Field(() => Boolean, { description: `Portfolio's situation` })
  active: boolean;
}

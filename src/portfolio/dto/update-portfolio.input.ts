import { PartialType } from '@nestjs/mapped-types';
import { CreatePortfolioInput } from './create-portfolio.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePortfolioInput extends PartialType(CreatePortfolioInput) {
  @Field(() => Int)
  id: number;
}

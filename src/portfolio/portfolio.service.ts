import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePortfolioInput } from './dto/create-portfolio.input';
import { UpdatePortfolioInput } from './dto/update-portfolio.input';
import Portfolio from './model/portfolio.model';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio) private repo: Repository<Portfolio>,
  ) {}

  create(createPortfolioInput: CreatePortfolioInput) {
    return 'This action adds a new portfolio';
  }

  async findAll(): Promise<Portfolio[]> {
    return this.repo.find();
  }

  async findOne(uuid: string): Promise<Portfolio> {
    return this.repo.findOne(uuid);
  }

  update(id: number, updatePortfolioInput: UpdatePortfolioInput) {
    return `This action updates a #${id} portfolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} portfolio`;
  }
}

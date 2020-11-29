import Portfolio from 'src/portfolio/model/portfolio.model';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export default class PurchasedStocks {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(
    () => Portfolio,
    portfolio => portfolio.purchasedStocks,
  )
  portfolio: Portfolio;

  @Column({
    length: 10,
  })
  code: string;

  @Column({
    length: 255,
  })
  companyName: string;

  @Column()
  price: number;

  @Column()
  balance: number;

  @Column({
    nullable: true,
  })
  sellDate: string;

  @Column()
  purchaseDate: string;
}

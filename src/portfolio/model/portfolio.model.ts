import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import PurchasedStocks from '../purchased-stocks/model/purchased-stocks.model';

@Entity()
export default class Portfolio {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @OneToMany(
    () => PurchasedStocks,
    ps => ps.portfolio,
  )
  purchasedStocks: PurchasedStocks[];

  // Create USER assoc when User is ready.

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Column({
    length: 255,
  })
  name: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  active: boolean;
}

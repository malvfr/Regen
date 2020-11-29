import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import PurchasedStocks from '../purchased-stocks/model/purchased-stocks.model';

@Entity()
export default class Portfolio {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @OneToMany(() => PurchasedStocks, ps => ps.portfolio)
    purchasedStocks: PurchasedStocks[];

    @Column()
    total: number;

    @Column()
    performance: number;

    @Column()
    startDate: string;
}
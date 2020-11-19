import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

@Entity()
export default class Users {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @BeforeInsert()
    async hashPassword() {
        const saltNumber = 10;

        this.password = await hash(this.password, saltNumber);
    }
    @Column({
        length: 255,
        nullable: false,
    })
    password: string;

    @Column({
        length: 30,
        nullable: false,
    })
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        unique: true,
        length: 150,
    })
    email: string;
}
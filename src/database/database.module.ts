import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (cfg: ConfigService) => {
                return {
                    type: 'postgres' as const,
                    host: cfg.get<string>('POSTGRES_HOST'),
                    port: cfg.get<number>('POSTGRES_PORT'),
                    username: cfg.get<string>('POSTGRES_USER'),
                    password: cfg.get<string>('POSTGRES_PASSWORD'),
                    database: cfg.get<string>('POSTGRES_DATABASE'),
                    entities: [__dirname + '/../**/*.model{.ts,.js}',],
                    synchronize: true,
                    autoLoadEntities: true,
                    logging: true
                };
            },
        }),
    ],
    providers: [ConfigService],
})
export class DatabaseModule { }
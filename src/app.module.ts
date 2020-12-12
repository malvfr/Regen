import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PortfolioModule } from './portfolio/portfolio.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PurchasedStocksModule } from './portfolio/purchased-stocks/purchased-stocks.module';
import { getLoggerConfig } from './configuration/logger';
import { WinstonModule } from 'nest-winston';

const winstonConfig = getLoggerConfig();

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({
      envFilePath: './resources/config/.env',
    }),
    PortfolioModule,
    UsersModule,
    DatabaseModule,
    PurchasedStocksModule,
    WinstonModule.forRoot(winstonConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

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
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const timezoned = () => {
  return new Date().toLocaleString('pt-br', {
    timeZone: 'America/Sao_Paulo'
  });
};

const buildWinstonTransport = (filename: string, level?: string) => {
  return new winston.transports.DailyRotateFile({
    filename,
    dirname: join(process.cwd(), "/logs"),
    format: winston.format.combine(
      winston.format.timestamp({
        format: timezoned
      }),
      winston.format.json(),
    ),
    level: level || undefined,
    handleExceptions: true,
    json: true,
    zippedArchive: true,
    maxSize: '20m'
  });
};

const winstonConfig = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: timezoned
        }),
        winston.format.json(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
    buildWinstonTransport('application-%DATE%.log'),
    buildWinstonTransport('errors-%DATE%.log', 'error')
  ],
};

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

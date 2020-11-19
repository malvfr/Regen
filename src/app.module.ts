import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PortfolioModule } from './portfolio/portfolio.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }), PortfolioModule, UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

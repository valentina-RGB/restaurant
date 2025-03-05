import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppDataSource } from './config/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          autoLoadEntities: true,
          ...AppDataSource.options,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

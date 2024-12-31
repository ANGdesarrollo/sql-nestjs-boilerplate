import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@src/Auth/AuthModule';

import { AppController } from './Presentation/AppController';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MikroOrmModule.forRoot(),
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}

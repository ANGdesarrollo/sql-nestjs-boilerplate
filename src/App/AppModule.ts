import { Module } from '@nestjs/common';
import { AppController } from './Presentation/AppController';
import { AuthModule } from '../Auth/AuthModule';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forRoot(), AuthModule],
  controllers: [AppController],
})
export class AppModule {}


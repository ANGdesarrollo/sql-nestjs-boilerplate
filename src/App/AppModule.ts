import { Module } from '@nestjs/common';
import { AppController } from './Presentation/AppController';
import { AuthModule } from '../Auth/AuthModule';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/**/*.entity.js'],
      entitiesTs: ['./src/**/*.entity.ts'],
      dbName: 'sql_backend',
      user: 'root',
      password: 'root',
      host: 'localhost',
      port: 5432,
      driver: PostgreSqlDriver,
      autoLoadEntities: true,
      ensureDatabase: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}


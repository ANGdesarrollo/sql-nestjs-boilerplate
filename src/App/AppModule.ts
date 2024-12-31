import { Module } from '@nestjs/common';
import { AppController } from './Presentation/AppController';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          host: 'localhost',
          driver: PostgreSqlDriver,
          port: 5432,
          user: 'root',
          password: 'root',
          dbName: 'sql_backend',
          entities: ['dist/**/*.entity.js'],
          entitiesTs: ['src/**/*.entity.ts'],
          debug: true,
          highlighter: new SqlHighlighter(),
          metadataProvider: TsMorphMetadataProvider,
          extensions: [Migrator, EntityGenerator, SeedManager],
        };
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}

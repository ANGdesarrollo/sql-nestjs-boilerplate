import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModuleDefinition } from '@nestjs/core/interfaces/module-definition.interface';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';

export const getTestAgent = async(
  ...modules: ModuleDefinition[]
): Promise<any> =>
{
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [
      await ConfigModule.forRoot({
        isGlobal: true
      }),
      MikroOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) =>
        {
          return {
            host: 'localhost',
            driver: PostgreSqlDriver,
            port: 5432,
            user: 'root',
            password: 'root',
            dbName: 'sql_backend',
            entities: ['dist/**/*.js'],
            entitiesTs: ['src/**/*.ts'],
            debug: true,
            highlighter: new SqlHighlighter(),
            metadataProvider: TsMorphMetadataProvider,
            extensions: [Migrator, EntityGenerator, SeedManager]
          };
        }
      }),
      ...modules
    ]
  }).compile();

  const app = moduleFixture.createNestApplication<NestFastifyApplication>(
    new FastifyAdapter()
  );

  app.setGlobalPrefix('api');

  await app.init();
  await app.getHttpAdapter().getInstance().ready();

  return {
    agent: request(app.getHttpServer()),
    app
  };
};

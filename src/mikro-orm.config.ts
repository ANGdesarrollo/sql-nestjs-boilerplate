import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver, ReflectMetadataProvider } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const isProduction = process.env.NODE_ENV === 'PRODUCTION';

export default {
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
  metadataProvider: isProduction ? ReflectMetadataProvider : TsMorphMetadataProvider,
  extensions: [Migrator, EntityGenerator, SeedManager]
} as MikroOrmModuleOptions;

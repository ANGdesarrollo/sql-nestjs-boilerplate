import { ConfigModule } from '@nestjs/config';
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

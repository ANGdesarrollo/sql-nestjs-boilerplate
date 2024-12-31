import request from 'supertest';
import { it, beforeAll, afterAll, describe } from 'vitest';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { TestAgent } from '../TestAgent';

let app: NestFastifyApplication;

beforeAll(async () => {
  app = await TestAgent();

  await app.init();
  await app.getHttpAdapter().getInstance().ready();
});

afterAll(async () => {
  await app.close();
});

describe('Login', () => {
  it(`/POST /auth/login`, () => {
    request(app.getHttpServer()).get('/auth/login').expect(200);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/App/AppModule';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Should return status 200', async () => {
    const response = await request(app.getHttpServer()).get('/');
    expect(response.status).toBe(200);
  });

  afterEach(async () => {
    await app.close();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { describe, expect, it, beforeAll, afterAll } from 'vitest';
import { AuthModule } from '../../src/Auth/AuthModule';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Login', () => {
    it('Should return 200', async () => {
      const response = await request(app.getHttpServer()).post('/auth/login');
      expect(response.status).toBe(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});

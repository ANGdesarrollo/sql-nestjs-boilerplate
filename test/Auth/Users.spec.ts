import { AuthModule } from '@auth/AuthModule';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { getTestAgent } from '@test/TestAgent';
import TestAgent from 'supertest/lib/agent';
import { it, beforeAll, describe, expect, afterAll } from 'vitest';


let agent: TestAgent;
let app: NestFastifyApplication;

describe('User endpoints', () =>
{
  beforeAll(async() =>
  {
    const testAgent = await getTestAgent(AuthModule);
    agent = testAgent.agent;
    app = testAgent.app;
  });

  afterAll(async() =>
{
    await app.close();
  });

  describe('Register', () =>
{
    it('/POST /auth/register', async() =>
{
      const response = await agent.post('/api/auth/register').send();
      expect(response.status).toBe(201);
    });
  });
});

import { NestFastifyApplication } from '@nestjs/platform-fastify';
import TestAgent from 'supertest/lib/agent';

import { AuthModule } from '../../src/Auth/AuthModule';
import { getTestAgent } from '../TestAgent';

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

import { faker } from '@faker-js/faker/locale/ar';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import TestAgent from 'supertest/lib/agent';

import { AuthModule } from '../../src/Auth/AuthModule';
import { UserPayload } from '../../src/Auth/Domain/Payloads/UserPayload';
import { BinaryState } from '../../src/Shared/Domain/Repositories/BinaryState';
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
      const payload: UserPayload = {
        username: faker.internet.username(),
        password: faker.internet.password(),
        is_admin: BinaryState.False,
        is_active: BinaryState.True
      };

      const response = await agent.post('/api/auth/register').send(payload);
      expect(response.status).toBe(201);
    });
  });
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/AppModule';
import { FastifyAdapter } from '@nestjs/platform-fastify';

(async () => {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 8000);
  console.log(`Application is running on: ${await app.getUrl()}`);
})();

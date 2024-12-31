import { Module } from '@nestjs/common';

import { PostController } from './Presentation/Controllers/PostControllers';

@Module({
  controllers: [PostController]
})
export class AuthModule {}

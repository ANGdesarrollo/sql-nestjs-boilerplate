import { Module } from '@nestjs/common';

import { UserUseCases } from './Application';
import { UserRepository } from './Infrastructure/UserRepository';
import { UserRepositoryImpl } from './Infrastructure/UserRepositoryImpl';
import { PostController } from './Presentation/Controllers/PostControllers';

@Module({
  controllers: [PostController],
  providers: [
    ...UserUseCases,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl
    }
  ]
})
export class AuthModule {}

import { Module } from '@nestjs/common';

import { RegisterUserUseCase } from './Application/RegisterUserUseCase';
import { UserRepository } from './Infrastructure/UserRepository';
import { PostController } from './Presentation/Controllers/PostControllers';
import { PrismaService } from '../Shared/Infrastructure/DatabaseService';

@Module({
  controllers: [PostController],
  providers: [UserRepository, RegisterUserUseCase],
})
export class AuthModule {}

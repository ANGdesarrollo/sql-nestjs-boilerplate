import { Injectable } from '@nestjs/common';

import { BasePrismaRepositoryImpl } from '../../Shared/Infrastructure/BasePrismaRepositoryImpl';
import { PrismaService } from '../../Shared/Infrastructure/DatabaseService';
import { UserDomain } from '../Domain/Entities/UserDomain';
import { UserPayload } from '../Domain/Payloads/UserPayload';

import { UserRepository } from './UserRepository';

@Injectable()
export class UserRepositoryImpl extends BasePrismaRepositoryImpl<UserPayload, UserDomain> implements UserRepository
{
  constructor(prisma: PrismaService)
  {
    super(prisma, 'user');
  }
}

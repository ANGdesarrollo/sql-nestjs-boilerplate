import { Injectable } from '@nestjs/common';

import { BaseRepository } from '../../Shared/Domain/Repositories/BaseRepository';
import { PrismaService } from '../../Shared/Infrastructure/DatabaseService';

@Injectable()
export class UserRepository extends BaseRepository
{
  constructor(prisma: PrismaService)
  {
    super(prisma, 'user');
  }
}

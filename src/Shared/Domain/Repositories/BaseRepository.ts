import { UserDomain } from '../../../Auth/Domain/Entities/UserDomain';
import { PrismaService } from '../../Infrastructure/DatabaseService';

export abstract class BaseRepository
{
  protected constructor(
    private readonly prisma: PrismaService,
    private readonly entityName: string
  ) {}

  async create(entity: UserDomain)
  {
    return this.prisma[this.entityName].create({
      data: entity
    });
  }
}


import { UserDomain } from '../../../Auth/Domain/Entities/UserDomain';
import { PrismaService } from '../../Infrastructure/DatabaseService';

export abstract class BaseRepository
{
  protected constructor(
    private readonly prisma: PrismaService,
    private readonly entityName: keyof PrismaService
  ) {}

  async create(entity: UserDomain)
  {
    const test =  this.prisma.user;
    // @ts-ignore
    return this.prisma[this.entityName].create({
      data: entity
    });
  }
}


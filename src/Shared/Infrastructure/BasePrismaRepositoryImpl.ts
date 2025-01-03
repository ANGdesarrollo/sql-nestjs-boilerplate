import { BaseRepository } from '../Domain/Repositories/BaseRepository';

import { PrismaService } from './DatabaseService';

export abstract class BasePrismaRepositoryImpl<D, T> implements BaseRepository<D, T>
{
  protected constructor(
    private readonly prisma: PrismaService,
    private readonly entityName: string
  ) {}

  async create(entity: D): Promise<T>
  {
    return this.prisma[this.entityName].create({
      data: entity
    });
  }
}


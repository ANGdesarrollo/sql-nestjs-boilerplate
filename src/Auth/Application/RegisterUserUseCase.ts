import { Injectable } from '@nestjs/common';

import { UserRepository } from '../Infrastructure/UserRepository';

@Injectable()
export class RegisterUserUseCase
{
  constructor(private repository: UserRepository) {}

  async execute(user: any): Promise<any>
  {
    return this.repository.create(user);
  }
}

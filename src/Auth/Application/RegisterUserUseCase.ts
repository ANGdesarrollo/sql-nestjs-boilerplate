import { Injectable } from '@nestjs/common';

import { UserDomain } from '../Domain/Entities/UserDomain';
import { UserPayload } from '../Domain/Payloads/UserPayload';
import { UserRepository } from '../Infrastructure/UserRepository';

@Injectable()
export class RegisterUserUseCase
{
  constructor(private repository: UserRepository) {}

  async execute(user: UserPayload): Promise<UserDomain>
  {
    return this.repository.create(user);
  }
}

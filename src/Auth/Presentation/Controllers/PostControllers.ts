import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { RegisterUserUseCase } from '../../Application/RegisterUserUseCase';
import { UserDomain } from '../../Domain/Entities/UserDomain';
import { UserPayload } from '../../Domain/Payloads/UserPayload';

@Controller('auth')
export class PostController
{
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login()
  {
    return;
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() body: UserPayload): Promise<UserDomain>
  {
    console.log('entre desde el testing', this.registerUserUseCase);
    return this.registerUserUseCase.execute(body);
  }
}

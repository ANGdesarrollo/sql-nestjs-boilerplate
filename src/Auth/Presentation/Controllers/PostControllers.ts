import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { RegisterUserUseCase } from '../../Application/RegisterUserUseCase';

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
  register(@Body() body: any)
  {
    return this.registerUserUseCase.execute(body);
  }
}

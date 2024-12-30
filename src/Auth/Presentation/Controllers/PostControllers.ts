import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('auth')
export class PostController {
  constructor() {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login() {
    return;
  }
}

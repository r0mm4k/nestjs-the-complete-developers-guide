import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {}

  @Get('/id')
  findOne() {}

  @Post()
  create() {}
}

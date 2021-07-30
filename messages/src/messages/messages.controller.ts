import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
  }

  @Post()
  create(@Body() body: any) {
    console.log(body);
  }
}

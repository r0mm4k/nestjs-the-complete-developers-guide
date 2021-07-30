import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
  }

  @Post()
  create(@Body() body: CreateMessageDto) {
    console.log(body);
  }
}

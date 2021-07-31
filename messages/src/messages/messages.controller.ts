import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DONT DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Post()
  create(@Body() { content }: CreateMessageDto) {
    return this.messagesService.create(content);
  }
}

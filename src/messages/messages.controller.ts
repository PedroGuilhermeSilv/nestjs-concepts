import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessagesService) { }
    @Get()
    findAll() {
        return this.messageService.getAll()
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.messageService.getOne(id)
    }

}

import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { InputCreateMesssage } from './messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messageService: MessagesService) { }
    @Get()
    findAll() {
        return this.messageService.getAll();
    }

    @Get(':id/')
    findOne(@Res() res: Response, @Param('id') id: string) {
        return res.status(HttpStatus.OK).json(
            [this.messageService.getOne(id)]
        )
    }

    @Post()
    @HttpCode(201)
    create(@Body() createMessageInput: InputCreateMesssage) {
        return {
            id: 1,
            message: createMessageInput.message
        }
    }


}

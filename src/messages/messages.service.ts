import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {

    getAll() {
        return "All messages"
    }

    getOne(id: string) {
        return `Return message ${id}`
    }

}

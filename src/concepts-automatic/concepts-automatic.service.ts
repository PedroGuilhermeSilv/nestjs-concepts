import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsAutomaticService {

    getHello(): string {
        return 'Concepts Automatic using service automatic';
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  getHello(): string {
    return 'Concepts Manual using service manual';
  }
}

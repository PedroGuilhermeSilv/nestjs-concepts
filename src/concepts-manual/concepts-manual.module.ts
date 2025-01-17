import { Module } from '@nestjs/common';
import { ConceptsManualController } from './concepts-manual.controllers';
import { ConceptsManualService } from './concepts-manual.service';

@Module({
  controllers: [ConceptsManualController],
  providers: [ConceptsManualService],
})
export class ConceptsManualModule { }

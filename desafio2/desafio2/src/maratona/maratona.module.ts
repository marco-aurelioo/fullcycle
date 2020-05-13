import { Module } from '@nestjs/common';
import { MaratonaController } from './maratona.controller';
import { MaratonaService } from './maratona.service';

@Module({
  controllers: [MaratonaController],
  providers: [MaratonaService]
})
export class MaratonaModule {}

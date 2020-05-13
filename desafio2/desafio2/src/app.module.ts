import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';

@Module({
  imports: [MaratonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

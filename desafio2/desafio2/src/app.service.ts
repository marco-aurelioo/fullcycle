import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Maratona } from './maratona';

@Injectable()
export class AppService extends TypeOrmCrudService<Maratona>{
  getHello(): string {
    return 'Hello World!';
  }
}

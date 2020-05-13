import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Maratona } from '../maratona';

@Injectable()
export class MaratonaService extends TypeOrmCrudService<Maratona>{
  
    constructor(@InjectRepository(Maratona) repo){
        super(repo);
    }

}

import { Controller } from '@nestjs/common';
import {Crud} from '@nestjsx/crud';
import { Maratona } from 'src/maratona';
import { MaratonaService } from './maratona.service';



@Crud({
    model:{type:Maratona}
})
@Controller('maratona')
export class MaratonaController {
    constructor(public service: MaratonaService){}
}

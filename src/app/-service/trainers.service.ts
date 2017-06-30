import { Injectable } from '@angular/core';
import {TRAINERS} from '../TRAINERS';

@Injectable()
export class TrainersService {
    getTrainers(){
      return TRAINERS
    }
    addTrainer(trainer) {
      if (trainer.name && trainer.course && trainer.time){
      TRAINERS.push(trainer);
      }
     }

}

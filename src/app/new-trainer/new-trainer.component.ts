import { Component, OnInit } from '@angular/core';
import { TrainersService} from '../-service/trainers.service';

@Component({
  selector: 'new-trainer',
  templateUrl: './new-trainer.component.html',
  styleUrls: ['./new-trainer.component.css'],
  providers: [TrainersService]
})
export class NewTrainerComponent implements OnInit {

  constructor(
    private ns: TrainersService
  ) { }

  addTrainer(trainerName, trainerCourse, trainerTime){
    let trainer = {
      name: trainerName.value,
      course: trainerCourse.value,
      time: trainerTime.value
    }
    this.ns.addTrainer(trainer);
    trainerName.value = '';
    trainerCourse.value = 'course';
    trainerTime.value = '';

  }
  ngOnInit() {
  }

}

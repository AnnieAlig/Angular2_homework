import { Component, OnInit } from '@angular/core';
import {TrainersService} from '../-service/trainers.service';

@Component({
  selector: 'trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css'],
  providers: [TrainersService]
})
export class TrainersComponent implements OnInit {

  constructor(
    private ns: TrainersService
  ) { }

  trainers=this.ns.getTrainers();
  ngOnInit() {
  }

}

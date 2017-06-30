import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../-service/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  constructor(
    private ns: CoursesService
  ) { }

  courses=this.ns.getCourses();
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CoursesService} from '../-service/courses.service';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
  providers: [CoursesService]

})
export class NewCourseComponent implements OnInit {

  constructor(
    private ns: CoursesService
  ) { }

  addCourse(courseName, courseDuration, coursePrice){
    let course = {
      name: courseName.value,
      duration: courseDuration.value + " month",
      price: "$ " + coursePrice.value
    }
    this.ns.addCourse(course);
    courseName.value = '';
    courseDuration.value = '';
    coursePrice.value = '';
  }

  ngOnInit() {
  }

}

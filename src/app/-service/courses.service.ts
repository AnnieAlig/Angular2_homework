import { Injectable } from '@angular/core';
import {COURSES} from '../COURSES';

@Injectable()
export class CoursesService {
   getCourses(){return COURSES}
    addCourse(course) {
      if (course.name && course.duration && course.price){
      COURSES.push(course);
      }
     }

}

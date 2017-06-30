import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainersComponent } from './trainers/trainers.component';
import { CoursesComponent } from './courses/courses.component';
import { NewTrainerComponent } from './new-trainer/new-trainer.component';
import { NewCourseComponent } from './new-course/new-course.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    CoursesComponent,
    NewTrainerComponent,
    NewCourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

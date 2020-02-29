//by Josephk 29/02/20
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courseList: Course[] = [
    new Course('Web Development', 'J.Hawkins', 'LHH cert A', '6 Weeks', 'None', '$375'),
    new Course('SCSS and Styling', 'B.Jones', 'LHH cert A1', '4 Weeks', 'HTML', '$275'),
    new Course('Java Foundations', 'T.Simpson', 'OCF', '8 Months', 'Basic IT', '$975'),
    new Course('Java Associate', 'T.Simpson', 'OCA', '9 Months', 'Java Foundations', '$975'),
    new Course('Java Professional', 'M.Stonehouse', 'OCP', '6 Months', 'Java Associate', '$1175'),
    new Course('Python', 'J.Hawkins', 'LHH P+', '12 Weeks', 'Some porgramming', '$1075'),

  ];


  // constructor() { }

  // ngOnInit() {
  // }

}

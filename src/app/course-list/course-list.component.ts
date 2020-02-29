//by Josephk 29/02/20
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list-bootstrap.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courseList: Course[] = [
    new Course('Web Development', 'J.Hawkins', 'LHH cert A', 6, 'None', 375, 'W151'),
    new Course('SCSS and Styling', 'B.Jones', 'LHH cert A1', 4, 'HTML', 275, 'W160'),
    new Course('Java Foundations', 'T.Simpson', 'OCF', 34, 'Basic IT', 975, 'JA01'),
    new Course('Java Associate', 'T.Simpson', 'OCA', 38, 'Java Foundations', 975, 'JA02'),
    new Course('Java Professional', 'M.Stonehouse', 'OCP', 26, 'Java Associate', 1175, 'JA03'),
    new Course('Python', 'J.Hawkins', 'LHH P+', 12, 'Some programming', 895, 'P110'),

  ];


  constructor() { }

  ngOnInit() {
  }

}

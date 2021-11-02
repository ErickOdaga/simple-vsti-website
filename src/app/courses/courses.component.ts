import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class COURSESComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courses= [
    { "id":1, "name":'Diploma', "description":'This is a 2 year course', "image":'../../assets/Diploma.jpg'},
    { "id":2, "name":'Certificate', "description":'This is a 2 year course', "image":'../../assets/certificate.jpg'},
    { "id":3, "name":'Professional Course', "description":'This is a 3 month course', "image":'../../assets/Professional.jpg'},
    { "id":4, "name":'Computer Packages',"description":'This is a 1 month course', "image": '../../assets/packages.jpg'}
]

}

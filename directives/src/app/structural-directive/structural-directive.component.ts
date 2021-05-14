import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  isActive = false;

  colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  color = 'blue';
  
  constructor() { }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  applicationName = 'Demo application';
  today: number = Date.now();

  employee: any = {
    name: 'Employee Name',
    age: 25
  }

  constructor() { }

  ngOnInit(): void {
  }

}

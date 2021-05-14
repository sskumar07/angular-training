import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  userModel = new User("", "kumar@gmail.com", 111111111);

  constructor() { }

  ngOnInit(): void {
  }

  addUser(){
    console.log(this.userModel);
    console.log("User added successfully.");
  }
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildViewchildComponent } from './child-viewchild/child-viewchild.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  username: string;
  @ViewChild(ChildViewchildComponent) childComponent: ChildViewchildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  getChildMessage(){
    this.username = this.childComponent.username;
  }

  clearChildMessage(){
    this.childComponent.clearMessage();
    this.username = '';
  }
}

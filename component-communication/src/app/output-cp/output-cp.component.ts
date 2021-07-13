import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildViewchildComponent } from '../viewchild/child-viewchild/child-viewchild.component';

@Component({
  selector: 'app-output-cp',
  templateUrl: './output-cp.component.html',
  styleUrls: ['./output-cp.component.css']
})
export class OutputCpComponent implements OnInit {

  childMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveChildMessage(event: string){
    this.childMessage = event;
  }
}

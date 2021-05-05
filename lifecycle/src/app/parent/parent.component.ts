import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, OnDestroy {

  @Input() userName: string;

  constructor() { 
    this.userName = 'demo';
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
  
}

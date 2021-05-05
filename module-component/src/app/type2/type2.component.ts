import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-type2',
  template: '<p>type2 works!</p>',
  styles: [`
  p {
    color: red;
  }`]
})
export class Type2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

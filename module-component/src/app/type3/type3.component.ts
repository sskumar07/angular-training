import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-type3]',
  template: `
  <p>type3 works!</p>
  <p>Multiline html component
  `,
  styleUrls: ['./type3.component.css']
})
export class Type3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

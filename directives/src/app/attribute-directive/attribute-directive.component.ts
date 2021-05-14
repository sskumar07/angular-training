import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  hasError = true;
  isSpecial = true;

  messageClasses = {
    "text-success" : !this.hasError,
    "text-error" : this.hasError,
    "text-special" : this.isSpecial
  };

  messageStyles = {
    'color': 'orange', 
    'font-style':  this.isSpecial      ? 'italic' : 'bold', 
    'font-size':   this.isSpecial    ? '24px'   : '12px' 
  };

  constructor() { }

  ngOnInit(): void {
  }

}

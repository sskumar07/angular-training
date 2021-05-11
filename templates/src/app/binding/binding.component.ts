import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  isButtonDisabled = true;
  columnSpan = 2;

  isSuccess = true;
  successClass = 'text-success alignment';
  multiStyle = 'color: blue; padding-left: 20px';

  buttonClickCount = 1;

  username = "";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    this.buttonClickCount = this.buttonClickCount + 1;
  }

  onSave(event: any){
    console.log(event);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  isButtonDisabled = false;
  columnSpan = 2;

  isSuccess = false;
  successClass = 'text-success alignment';
  multiStyle = 'color: blue; padding-left: 20px';

  buttonClickCount = 1;

  username = "Satheesh";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    this.buttonClickCount = this.buttonClickCount + 1;
    this.username = "Demo User";
  }

  onSave(event: any){
    console.log(event);
  }

}

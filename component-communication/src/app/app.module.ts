import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputPCComponent } from './input-pc/input-pc.component';
import { ChildInputComponent } from './input-pc/child-input/child-input.component';
import { OutputCpComponent } from './output-cp/output-cp.component';
import { ChildOutputComponent } from './output-cp/child-output/child-output.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ChildViewchildComponent } from './viewchild/child-viewchild/child-viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPCComponent,
    ChildInputComponent,
    OutputCpComponent,
    ChildOutputComponent,
    ViewchildComponent,
    ChildViewchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

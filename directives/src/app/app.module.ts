import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveComponent,
    StructuralDirectiveComponent,
    CustomDirectiveComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

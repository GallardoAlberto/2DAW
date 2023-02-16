import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
@NgModule({
  declarations: [
    AppComponent,
    EjdirectivangclassComponent
  ],
  imports: [
    BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

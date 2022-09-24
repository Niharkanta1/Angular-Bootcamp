import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ClassDirDirective } from './class-dir.directive';
import { TimesDirDirective } from './times-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ClassDirDirective,
    TimesDirDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

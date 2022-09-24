import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PipeComponent } from './pipe/pipe.component';
import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';

@NgModule({
  declarations: [
    PipeComponent,
    AppComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

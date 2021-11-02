import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { COURSESComponent } from './courses/courses.component';
import { JOINNOWComponent } from './join-now/join-now.component';
import { ABOUTComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    COURSESComponent,
    JOINNOWComponent,
    ABOUTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

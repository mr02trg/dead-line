import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TimerComponent } from './timer/timer.component';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TimerComponent,
    TimerControllerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

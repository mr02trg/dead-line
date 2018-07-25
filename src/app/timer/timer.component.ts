import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MyDateTime } from '../model/mydatetime.model';
import { IMyDateTime } from '../interface/mydatetime.interface';
import { timer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input('startDate') fromDate: MyDateTime;
  @Input('endDate') toDate: MyDateTime;
  @Input('description') taskDescription: string;

  message: string;
  counter$: any;
  private subscription : Subscription;

  constructor() { }

  ngOnInit() {
    
    var delay = this.createDate(this.fromDate) - new Date().getTime();
    var endDate =this.createDate(this.toDate); 

    this.counter$ = timer(0, 1000).pipe(
      map(x => {
        return Math.floor((endDate - new Date().getTime())/1000);
      })
    );
    this.subscription = this.counter$.subscribe(x => this.message = this.dhms(x));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addTask() {
    var endDateModel = this.createDate(this.toDate);
    
  }

  private createDate (value : IMyDateTime) {
    return new Date().setFullYear(value.year, value.month, value.day);
  }

  // convert second to date time format
  private dhms(t: number) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
        days + 'd',
        hours + 'h',
        minutes + 'm',
        seconds + 's'
    ].join(' ');
}

  debug() {
    console.log(this.fromDate);
    console.log(this.toDate);
  }

}

import { Injectable } from '@angular/core';
import { MyDateTime } from '../model/mydatetime.model';
import { Task } from '../model/task.model';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  taskList : Task[] = [new Task(new MyDateTime(), new MyDateTime({day: 17, month: 9, year:2018, hour: 0, minute: 0, second: 0}), "This is a test")];

  constructor() { }

  getTaskList() {
    return of(this.taskList);
  }

  addNewTask(data: Task) {
    this.taskList.push(new Task(data.startDate, data.endDate, data.description));
  }
}

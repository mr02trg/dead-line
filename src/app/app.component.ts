import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from './model/task.model';
import { TaskManagementService } from './service/task-management-service.service';
import { Subscription } from '../../node_modules/rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  taskList: Task[];
  private taskListSubscription: Subscription;

  constructor(private taskManagementService: TaskManagementService) {
  }

  ngOnInit() {
    this.getTaskList();
    //this.printTaskList();
  }

  ngOnDestroy() {
    this.taskListSubscription.unsubscribe();
  }

  private getTaskList() {
    this.taskListSubscription = this.taskManagementService.getTaskList()
                                                          .subscribe(tl => this.taskList = tl);
  }

  private printTaskList() {
    console.log(this.taskList);
  }
}

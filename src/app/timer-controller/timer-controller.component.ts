import { Component, OnInit } from '@angular/core';
import { MyDateTime } from '../model/mydatetime.model';
import { TaskManagementService } from '../service/task-management-service.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.css']
})
export class TimerControllerComponent implements OnInit {

  useCurrDate: boolean = false;
  startDateModel: MyDateTime = null;
  endDateModel: MyDateTime = null;

  showErrorMessage: boolean = false;

  constructor(private taskManagementService: TaskManagementService) {
  }

  ngOnInit() {
  }

  isDisabled() {
    if ((this.startDateModel == null && !this.useCurrDate) || this.endDateModel == null) {
      return true;
    }
    return false;
  }

  private isDateModelValid() {
    var res = true;
    if (this.startDateModel != null) {
      if (this.startDateModel.year > this.endDateModel.year) {
        res = false;
      }
      else if (this.startDateModel.month > this.endDateModel.month) {
        res = false;
      }
      else if (this.startDateModel.day > this.endDateModel.day) {
        res = false;
      }
      else if (this.startDateModel.year == this.endDateModel.year &&
          this.startDateModel.month == this.endDateModel.month &&
          this.startDateModel.day == this.endDateModel.day) {
            res = false;
          }
    }
    return res;
  }

  addTask() {
    if (!this.isDateModelValid()) {
      this.showErrorMessage = true;
      console.log("Invalid input date time");
      return; 
    }
    if (this.useCurrDate) {
      this.startDateModel = null;
    }
    this.taskManagementService.addNewTask(new Task(this.startDateModel, this.endDateModel, ""));
  }
}

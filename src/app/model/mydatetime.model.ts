import { IMyDateTime } from '../interface/mydatetime.interface';

export class MyDateTime {
  public day: number;
  public month: number;
  public year: number;
  public hour: number;
  public minute: number;
  public second: number;

  constructor (dateObj?: IMyDateTime) {
        var curr = new Date();
        this.day = dateObj && dateObj.day || curr.getDate();
        this.month = dateObj && dateObj.month || curr.getMonth();
        this.year = dateObj && dateObj.year || curr.getFullYear();
        this.hour = dateObj && dateObj.hour || curr.getHours();
        this.minute = dateObj && dateObj.minute || curr.getMinutes();
        this.second = dateObj && dateObj.second || curr.getSeconds();
    }
}
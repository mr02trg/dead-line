import { MyDateTime } from './mydatetime.model';

export class Task {
    public startDate: MyDateTime;
    public endDate: MyDateTime;
    public description: string;

    constructor(startDate: MyDateTime, endDate: MyDateTime, description: string) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }
}
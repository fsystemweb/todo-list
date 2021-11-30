import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  @Input() task: Task;
  public flagUpdate = false;
  public newTitle: string;

  constructor() {}

  ngOnInit(): void {}

  checkTask(value) {
    this.task.checked = value.flag;
  }

  eventUpdate(task) {
    console.log(this.newTitle);
    if (!this.flagUpdate) {
      this.newTitle = task.title;
      this.flagUpdate = true;
    } else {
      this.task.title = this.newTitle;
      this.flagUpdate = false;
    }
  }
}

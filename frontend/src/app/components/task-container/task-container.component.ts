import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  @Input() task: Task;
  public flagUpdate = false;
  @ViewChild('newTitle') newTitle: ElementRef;
  @Output() eventUpdateTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  checkTask(value) {
    this.task.checked = value.flag;
  }

  eventUpdate(task) {
    if (!this.flagUpdate) {
      this.flagUpdate = true;
    } else {
      this.task.title = this.newTitle.nativeElement.value;
      this.flagUpdate = false;
      this.eventUpdateTask.emit(this.task);
    }
  }
}

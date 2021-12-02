import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models';
import { ApiRestTaskService } from 'src/app/services/api-rest-task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private apiRestTaskService: ApiRestTaskService) {}

  ngOnInit(): void {
    this.getAll();
  }

  public delete() {
    let tasksToDelete = [];
    tasksToDelete = this.tasks.filter((task) => task.checked);

    tasksToDelete.forEach((task) => {
      this.apiRestTaskService.delete(task).subscribe();
    });

    this.tasks = this.tasks.filter((task) => !task.checked);
  }

  public async new() {
    const newTask = new Task('New task');
    this.apiRestTaskService.createTask(newTask).subscribe();
    this.tasks.push(newTask);
  }

  public getAll() {
    this.apiRestTaskService.getAll().subscribe((data) => (this.tasks = data));
  }
}

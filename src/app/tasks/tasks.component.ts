import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input ({required:true}) userName!: string;
@Input ({required:true}) userId!: string;
isAddingTask:boolean = false;

constructor(private tasksService: TasksService) {}


get selectedUserTasks() {
  return this.tasksService.getUserTasks(this.userId);

}

onCompleteTask(taskId: string) {
  this.tasksService.removeTask(taskId);
}


onStartAddingTask() {
  this.isAddingTask = true;
}

onCancelAddingTask() {
  this.isAddingTask = false;
}


}

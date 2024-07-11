import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId! : string;
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';


  constructor( private tasksService : TasksService) {}

  onCancel () {
    this.cancel.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    } , this.userId);
    this.cancel.emit();
  };

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CradComponent } from "../../shared/crad/crad.component";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CradComponent , DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required : true}) task!:Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }

}

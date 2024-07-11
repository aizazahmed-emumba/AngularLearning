import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/crad/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TaskComponent,TasksComponent,NewTaskComponent],
    exports: [TasksComponent],
    imports: [SharedModule , CommonModule , FormsModule],
    providers: [],
    bootstrap: []
})
export class TasksModule { }
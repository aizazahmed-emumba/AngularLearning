import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.componnet";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { TasksComponent } from "./tasks/tasks.component";
import { SharedModule } from "./shared/crad/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent ,HeaderComponent   , UserComponent ],
    imports: [BrowserModule , SharedModule , TasksModule ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

} 
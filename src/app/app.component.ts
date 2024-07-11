import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUser: User | null = null ;

  onSelectUser (id:string) {
    this.selectedUser = this.users.find(user => user.id === id)!;
  }

}

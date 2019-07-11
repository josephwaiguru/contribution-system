import { Component, OnInit } from '@angular/core';
import { UserService } from '../admin/shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<any> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.userList().subscribe((res: any) =>this.users=res.data);
  }

  getMetaValue(user: any, name: string) {
    let meta = user.meta, metaVal;

    if(meta.length == 0) {
      return;
    }

    let foundMeta = meta.forEach(m => {
      if( m.name == name ) {
        metaVal = m.value;
      }
    });
    
    return metaVal;
  }

}

import { Component, OnInit } from '@angular/core';
import { ChildService } from '../admin/shared/child.service';
import { Child } from './child.model';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../admin/shared/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childForm: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormControl(),
    guardian_name: new FormControl(),
    guardian_email: new FormControl(),
    guardian_phone: new FormControl(),
    dob: new FormControl(),
  });

  childList: Array<Child> = [];

  child: Child = new Child();

  sponsors: Array<any> = [];

  sponsor_id: number;

  constructor(private childService: ChildService, private userService: UserService) { }

  ngOnInit() {
    this.getChildList();
    this.getUsers();
  }

  getChildList() {
    this.childService.childList().subscribe((res: any) => {
      this.childList = res.data;
    });
  }

  getUsers() {
    this.userService.userList().subscribe((res: any) =>this.sponsors=res.data);
  }

  onAssignSponsor() {
    this.childService.assignSponsor(this.sponsor_id).subscribe(res=> {

    })
  }

  onSave(modal: any) {
    
    if(this.childForm.valid) {
      this.childService.addChild(this.childForm.value).subscribe((res: any) => {
        //refresh child data
        this.getChildList();

        modal.hide();
      });
    }
  }
}

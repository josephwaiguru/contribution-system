import { Component, OnInit } from '@angular/core';
import { ChildService } from '../admin/shared/child.service';
import { Child } from './child.model';
import { FormGroup, FormControl } from '@angular/forms';

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
  });

  childList: Array<Child> = [];

  child: Child = new Child();

  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.getChildList();
  }

  getChildList() {
    this.childService.childList().subscribe((res: any) => {
      this.childList = res.data;
    });
  }

  onSave(modal: any) {
    console.log('Form valid ?', this.childForm.valid);
    if(this.childForm.valid) {
      this.childService.addChild(this.childForm.value).subscribe((res: any) => {
        //refresh child data
        this.getChildList();

        modal.hide();
      });
    }
  }
}

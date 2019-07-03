import { Component, OnInit } from '@angular/core';
import { ChildService } from '../admin/shared/child.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  childList: Array<any> = [];

  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.getChildList();
  }

  getChildList() {
    this.childService.childList().subscribe((res: any) => {
      this.childList = res.data;
    });
  }
}

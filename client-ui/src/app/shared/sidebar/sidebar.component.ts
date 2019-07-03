import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: Array<any> = [
    {
      name: 'Dashboard',
      icon: '',
      route: '/admin/dashboard'
    },
    {
      name: 'Child',
      icon: '',
      route: '/admin/child'
    },
    {
      name: 'Sponsors',
      icon: '',
      route: '/admin/users'
    },
    {
      name: 'Contributions',
      icon: '',
      route: '/admin/contributions'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

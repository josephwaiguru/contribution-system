import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Child } from '../../child/child.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private http: HttpClient) { }

  public childList() {
    return this.http.get(`${environment.api}/child-list`);
  }

  public addChild(post: Child) {
    return this.http.post(`${environment.api}/add-child`, post);
  }
}

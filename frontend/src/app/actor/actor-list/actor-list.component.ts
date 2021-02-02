import { Component, OnInit } from '@angular/core';

import {Actor} from '../../shared/actor';
import {ActorStoreService} from '../../services/actor-store.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'ca-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[];

  constructor(private as: ActorStoreService, public auth: AuthService) { }

  ngOnInit(): void {
    if(this.auth.can('get:actors')) {
      // this.as.getActors().subscribe(res => this.actors = res);
      let observable = this.as.getActors();
      observable.subscribe((data:any) => {
        this.actors = data.actors;
      })
    }
  }

}

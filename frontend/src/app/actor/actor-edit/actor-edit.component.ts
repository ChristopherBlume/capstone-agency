import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Actor} from '../../shared/actor';
import {ActorStoreService} from '../../services/actor-store.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ca-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  actor: Actor

  constructor(
    public as: ActorStoreService,    
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    let observable = this.as.getSingle(params.get('id'));
    observable.subscribe((data:any) => {
      this.actor = data.actor;
    })
  }

  updateActor(actor: Actor) {
    if(this.auth.can('patch:actor')) {
      actor = this.actor;
      console.log(actor);
      this.as.update(actor).subscribe(() => {
        this.router.navigate(['../../../..', 'actors', actor.id], {relativeTo:this.route});
      });
    }
  }

}

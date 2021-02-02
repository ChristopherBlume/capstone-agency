import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Actor} from '../../shared/actor';
import {ActorStoreService} from '../../services/actor-store.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ca-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {
  @Input() actor: Actor;

  constructor(
    public as: ActorStoreService,    
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    let observable = this.as.getSingle(params.get('id'));
    observable.subscribe((data:any) => {
      this.actor = data.actor;
    })
  }

  removeActor() {
    if(this.auth.can('delete:actor')) {
      this.as.remove(this.actor).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    }
  }

}

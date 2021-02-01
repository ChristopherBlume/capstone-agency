import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import {Movie} from '../shared/movie';
import {Actor} from '../shared/actor';
import {MovieStoreService} from '../services/movie-store.service';
import {ActorStoreService} from '../services/actor-store.service';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'ca-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(
    private ms: MovieStoreService,
    private as: ActorStoreService,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  createMovie(movie: Movie) {
    if(this.auth.can('add:movies')){
      this.ms.create(movie).subscribe(() => {
        this.router.navigate(['../..', 'movies'], { relativeTo: this.route });
      });
    }
  }

  createActor(actor: Actor) {
    if(this.auth.can('add:actors')) {
      this.as.create(actor).subscribe(() => {
        this.router.navigate(['../..', 'actors'], {relativeTo:this.route});
      })
    }
  }


}

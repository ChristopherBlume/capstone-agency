import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {MoviesApiService} from './movies-api.service';
import {Movie} from './movie.model';
import {Actor} from './actor.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';
  moviesListSubs: Subscription;
  moviesList: Movie[];
  actorsList: Actor[];
  authenticated = false;

  constructor(private moviesApi: MoviesApiService) {

  }
  ngOnInit() {
    let oberservable = this.moviesApi.getMovies();
    oberservable.subscribe((data:any) => {
      this.moviesList = data.movies;
      console.log(data.movies)
    })

    let obs = this.moviesApi.getActors();
    obs.subscribe((data:any) => {
      this.actorsList = data.actors;
      console.log(data.actors)
    })
  }
  ngOnDestroy(){
    this.moviesListSubs.unsubscribe();
  }

}
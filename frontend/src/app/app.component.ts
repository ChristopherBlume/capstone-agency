import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {MoviesApiService} from './services/movies-api.service';
import {Movie} from './models/movie.model';
import {Actor} from './models/actor.model';
import { AuthService } from './services/auth.service';

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
  loginURL: string;

  constructor(private moviesApi: MoviesApiService, public auth: AuthService) {
    this.initializeApp();
  }

  initializeApp() {
    this.auth.load_jwts();
    this.auth.check_token_fragment();
  }

  loginAuth() {
    this.loginURL = this.auth.build_login_link();
    window.location.href=this.loginURL;
  }

  ngOnInit() {
    if(this.auth.can('get:movies')) {
      let oberservable = this.moviesApi.getMovies();
      oberservable.subscribe((data:any) => {
        this.moviesList = data.movies;
      })
    }
    if(this.auth.can('get:actors')) {
      let observable = this.moviesApi.getActors();
      observable.subscribe((data:any) => {
        this.actorsList = data.actors;
      })
    }
  }
  ngOnDestroy(){
    this.moviesListSubs.unsubscribe();
  }

}
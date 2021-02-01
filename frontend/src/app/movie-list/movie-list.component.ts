import { Component, OnInit } from '@angular/core';

import {Movie} from '../shared/movie';
import {MovieStoreService} from '../services/movie-store.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'ca-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private ms: MovieStoreService, public auth: AuthService) { }

  ngOnInit(): void {
    if(this.auth.can('get:movies')) {
      // this.ms.getMovies().subscribe(res => this.movies = res);
      let observable = this.ms.getMovies();
      observable.subscribe((data:any) => {
        this.movies = data.movies;
        // console.log(data.movies)
      })
    }
  }

}

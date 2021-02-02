import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Movie} from '../../shared/movie';
import {MovieStoreService} from '../../services/movie-store.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ca-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: Movie;

  constructor(
    public ms: MovieStoreService,
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    let observable = this.ms.getSingle(params.get('id'));
    observable.subscribe((data:any) => {
      this.movie = data.movie;
      console.log(this.movie)
    })
  }

  updateMovie(movie: Movie) {
    if(this.auth.can('patch:movie')) {
      movie = this.movie;
      console.log(movie);
      this.ms.update(movie).subscribe(() => {
        this.router.navigate(['../../..', 'movies', movie.id], {relativeTo:this.route});
      });
    }
  }
}

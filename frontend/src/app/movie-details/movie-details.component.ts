import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Movie} from '../shared/movie';
import {MovieStoreService} from '../services/movie-store.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ca-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;

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
    })
  }

  removeMovie() {
    if(this.auth.can('delete:movie')) {
      this.ms.remove(this.movie).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    }
  }

}

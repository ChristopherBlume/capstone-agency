import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../../shared/movie';
import {MovieStoreService} from '../../services/movie-store.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ca-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  constructor(    
    public ms: MovieStoreService,
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {API_URL} from '../../environments/environment';
import {Movie} from '../models/movie.model';
import {Actor} from '../models/actor.model';
import { AuthService } from './auth.service';

@Injectable()
export class MoviesApiService {

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
    };
    return header;
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${API_URL}/movies`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${API_URL}/actors`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  saveMovies(movie: Movie) {
    this.http.post(`${API_URL}/movies`, movie, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }
}
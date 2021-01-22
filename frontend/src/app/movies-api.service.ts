import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {API_URL} from '../environments/environment';
import {Movie} from '../app/movie.model';
import {Actor} from '../app/actor.model';

@Injectable()
export class MoviesApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${API_URL}/movies`).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${API_URL}/actors`).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Movie} from '../shared/movie';
import {AuthService} from './auth.service';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieStoreService {
  
  constructor(private http: HttpClient, private auth: AuthService) { }

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

  public create(movie: Movie): Observable<any> {
    return this.http.post(`${API_URL}/movies`, movie, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public remove(movie: Movie): Observable<any> {
    return this.http.delete(`${API_URL}/movies/${movie.id}`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public getSingle(id: any): Observable<Movie> {
    return this.http.get<Movie>(`${API_URL}/movies/${id}`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }))
  }


}

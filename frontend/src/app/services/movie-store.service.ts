import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Movie} from '../shared/movie';
import {AuthService} from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieStoreService {

  baseUrl = environment.baseUrl;
  
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
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public create(movie: Movie): Observable<any> {
    return this.http.post(`${this.baseUrl}/movies`, movie, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public remove(movie: Movie): Observable<any> {
    return this.http.delete(`${this.baseUrl}/movies/${movie.id}`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public getSingle(id: any): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movies/${id}`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }))
  }

  public update(movie: Movie): Observable<any> {
    console.log(movie.title);
    return this.http.patch(`${this.baseUrl}/movies/${movie.id}`, movie, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    })
    )
  }


}

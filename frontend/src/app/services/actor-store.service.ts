import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthService} from './auth.service';
import {Actor} from '../shared/actor';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorStoreService {

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

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.baseUrl}/actors`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public create(actor: Actor): Observable<any> {
    return this.http.post(`${this.baseUrl}/actors`, actor, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public remove(actor: Actor): Observable<any> {
    return this.http.delete(`${this.baseUrl}/actors/${actor.id}`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public getSingle(id: any): Observable<Actor> {
    return this.http.get<Actor>(`${this.baseUrl}/actors/${id}`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }))
  }

  public update(actor: Actor): Observable<any> {
    console.log(actor.name);
    return this.http.patch(`${this.baseUrl}/actors/${actor.id}`, actor, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    })
    )
  }

}


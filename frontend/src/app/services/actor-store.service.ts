import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthService} from './auth.service';
import {Actor} from '../shared/actor';
import { API_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorStoreService {

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
    return this.http.get<Actor[]>(`${API_URL}/actors`, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }

  public create(actor: Actor): Observable<any> {
    return this.http.post(`${API_URL}/actors`, actor, this.getHeaders()).pipe(catchError(error => {
      return throwError(error.message)
    }));
  }
}


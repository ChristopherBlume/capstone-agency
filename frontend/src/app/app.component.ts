import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {MovieStoreService} from '../app/services/movie-store.service'
@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginURL: string;

  constructor(private ms: MovieStoreService, public auth: AuthService) {
    this.initializeApp();
  }

  initializeApp() {
    this.auth.load_jwts();
    this.auth.check_token_fragment();  
  }
  
  loginAuth() {
    this.loginURL = this.auth.build_login_link();
    window.location.href=this.loginURL;
  }


}

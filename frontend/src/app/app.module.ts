import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorItemComponent } from './actor-item/actor-item.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieItemComponent,
    ActorListComponent,
    ActorItemComponent,
    MovieFormComponent,
    CreateMovieComponent,
    ActorFormComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorItemComponent } from './actor/actor-item/actor-item.component';
import { MovieFormComponent } from './movie/movie-form/movie-form.component';
import { CreateMovieComponent } from './create/create.component';
import { ActorFormComponent } from './actor/actor-form/actor-form.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { ActorDetailsComponent } from './actor/actor-details/actor-details.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';

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
    MovieDetailsComponent,
    ActorDetailsComponent,
    MovieEditComponent,
    ActorEditComponent
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

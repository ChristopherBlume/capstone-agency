import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieListComponent} from './movie/movie-list/movie-list.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { CreateMovieComponent } from './create/create.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { ActorDetailsComponent } from './actor/actor-details/actor-details.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'actors',
    component: ActorListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'actors/:id',
    component: ActorDetailsComponent
  },
  {
    path: 'admin/edit/:id',
    component: MovieEditComponent
  },
  {
    path: 'admin',
    redirectTo: 'admin/create',
    pathMatch: 'full'
  },
  {
    path: 'admin/create',
    component: CreateMovieComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
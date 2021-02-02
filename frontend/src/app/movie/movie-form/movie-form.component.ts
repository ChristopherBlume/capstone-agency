import { Component, OnInit, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import {Movie} from '../../shared/movie';

@Component({
  selector: 'ca-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit, OnChanges {

  movie = {
    id: null,
    title: '',
    release_date: ''
  };

  movieForm: FormGroup;

  @Output() submitMovie = new EventEmitter<Movie>();
  // @ViewChild('movieForm', {static: true}) movieForm: NgForm;

  submitForm() {
    this.submitMovie.emit(this.movie);
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setFormValues(this.movie);
  }

  public setFormValues(movie: Movie) {
    this.movieForm.patchValue(movie);
  }

}

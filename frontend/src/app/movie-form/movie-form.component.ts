import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Movie} from '../shared/movie';

@Component({
  selector: 'ca-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movie = {
    id: null,
    title: '',
    release_date: ''
  };

  @Output() submitMovie = new EventEmitter<Movie>();
  @ViewChild('movieForm', {static: true}) movieForm: NgForm;

  submitForm() {
    this.submitMovie.emit(this.movie);
    this.movieForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

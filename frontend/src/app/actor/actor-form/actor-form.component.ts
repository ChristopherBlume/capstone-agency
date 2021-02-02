import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Actor} from '../../shared/actor';

@Component({
  selector: 'ca-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent implements OnInit {

  actor = {
    id: null,
    name: '',
    age: undefined,
    gender: ''
  }

  @Output() submitActor = new EventEmitter<Actor>();
  @ViewChild('actorForm', {static:true}) actorForm: NgForm;

  submitForm() {
    this.submitActor.emit(this.actor);
    this.actorForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

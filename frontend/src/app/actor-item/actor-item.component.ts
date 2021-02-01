import { Component, OnInit, Input } from '@angular/core';

import {Actor} from '../shared/actor';

@Component({
  selector: 'ca-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {

  @Input() actor: Actor;
  constructor() { }

  ngOnInit(): void {
  }

}

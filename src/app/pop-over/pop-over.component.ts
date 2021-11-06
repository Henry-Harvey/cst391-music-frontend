import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css'],
  animations: [
    trigger('popOverState', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
  ],
})
export class PopOverComponent implements OnInit {
  animate = false;

  constructor() {}

  ngOnInit(): void {}

  toggleAnimate() {
    this.animate = !this.animate;
  }

  get displayAnimation() {
    return this.animate ? 'show' : 'hide';
  }
}

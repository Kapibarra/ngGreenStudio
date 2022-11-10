import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial<=>final', animate('250ms')),
    ]),
    trigger('rotatedState', [
      state(
        'default',
        style({
          transform: 'rotate(180deg)',
        })
      ),
      state(
        'rotated',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      transition('default<=>rotated', animate('250ms')),
    ]),
  ],
})
export class ProjectItemComponent implements OnInit {
  @Input() title: string = 'default';
  showBody = false;
  constructor() {}

  ngOnInit(): void {}
  toggleAccordion() {
    this.showBody = !this.showBody;

    console.log(event);
  }
}

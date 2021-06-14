import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-wk-classes-lib',
  template: `
    <h2 *ngIf="displayMessage">Message: {{ message }}</h2>
    <p>Welcome to class component</p>
  `,
  styles: [
  ]
})
export class WkClassesLibComponent implements OnInit {
  @Input() displayMessage: boolean = false;
  @Input() message: string = 'Hello World';
  constructor() { }

  ngOnInit(): void {
  }

}

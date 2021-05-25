import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  optionsTooltip: any;
  constructor() {
    this.optionsTooltip = {
      'hide-delay': 50,
      'animation-duration': 50,
      placement: 'bottom'
    };
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wk-phoenix-app';

  handleClassSelected(event: number): void {
    alert(event);
  }
}

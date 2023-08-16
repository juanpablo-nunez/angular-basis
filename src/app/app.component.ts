import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private value: number = 10;
  public title: string = 'Buenas a todos';
  public counter: number = this.value;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = this.value;
  }
}

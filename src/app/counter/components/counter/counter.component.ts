import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="cambiar(1)" class="btn btn-primary me-2">+1</button>
    <button (click)="reset()" class="btn btn-primary me-2">Reset</button>
    <button (click)="cambiar(-1)" class="btn btn-primary">-1</button>
  `,
})
export class CounterComponent {
  public title: string = 'LestradamusAG';
  public counter: number = 10;
  cambiar(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}

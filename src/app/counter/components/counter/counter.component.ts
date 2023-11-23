import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">RESET</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public title: string = 'Mi Primera app de Angular';
  public counter: number = 10;

  increaseBy(value: number): void {
    //para incrementar en un valor
    this.counter += value
  }

  resetCounter() {
    //Reetear el valor a 10
    this.counter = 10
  }

  ngOnInit() { }
}

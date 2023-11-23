import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName(): string {
    //return 'Hola Mundo'.toUpperCase()
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spider-Man'
  }

  changeAge(): void {
    this.age = 25
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;

    //INSTRUCCIONES FUERA DEL CICLO DE DETECCIÓN DE ANGULAR
    //Encuentra el primer h1
    //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'

    //Encuentra todos los h1
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    })

  }
}

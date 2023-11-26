import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(){
    console.log(this.character)
    //Validacion para no mandar elementos sin nombre
    if(this.character.name.length === 0) return;
    //Si tiene nombre
    this.onNewCharacter.emit(this.character);
    //Para limpiar el formulario
    this.character.name = '';
    this.character.power = 0
  }
}

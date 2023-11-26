import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(){
    console.log(this.character)
  }
}

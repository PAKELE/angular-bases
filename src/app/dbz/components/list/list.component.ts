import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  //onDelete = Index value: number

  onDeletCharacter(id?:string):void{
    if(!id) return
    //TODO Emitir el ID del personaje
    this.onDelete.emit(id);
  }
}

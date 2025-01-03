import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  }
  ,{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character):void{
    console.log('MainPage')
    console.log(character)

    const newCharacter: Character = {
       ...character, id: uuid() //operador spread para que coja todos los atributos del objeto
      //name: character.name,
      //power: character.power
    }

    this.characters.push(newCharacter);


  }

  // onDeleteCharacter(index: number):void{
  //   console.log(index);
  //   this.characters.splice(index,1)
  // }


  deleteCharacterById( id:string){
    this.characters = this.characters.filter( character => character.id !== id );

  }
}

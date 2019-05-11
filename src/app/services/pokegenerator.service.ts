import { Injectable } from '@angular/core';

import { Pokemon } from '../classes/pokemon';
import { Ability } from '../classes/ability';
import { Move } from '../classes/move';
import { Effect } from '../classes/effect';

@Injectable({
  providedIn: 'root'
})
export class PokegeneratorService {

  constructor() { }

  getPokemons(data: any) {
   let p: any = data['pokemon_entries'];
   let pokemons: Array<string> = [];
  
   for(var i = 0; i < p.length; i++){
    pokemons.push(p[i].pokemon_species.name);
   }
   return pokemons;
  }

  getPokemon(data: any): Pokemon {
   let pokemon: Pokemon;
   pokemon = { 
    id: data.id,
    name: data.name,
    weight: data.weight,
    height: data.height,
    abilities: this.getAbilities(data),
    moves: this.getMoves(data),
    specie: this.getSpecies(data),
    sprite: this.getSprite(data),
    types: this.getTypes(data)
   }
   return pokemon;
  }

  private getAbilities(data: any): Array<string> {
   let a: any = data['abilities'];
   let abilities: Array<string> = [];
   
   for(var i = 0; i < a.length; i++){
    abilities.push(a[i].ability.url);
   }
   return abilities; 
  }

  private getMoves(data: any): Array<string> {
   let m: any = data['moves'];
   let moves: Array<string> = [];
   
   for(var i = 0; i < m.length; i++){
    moves.push(m[i].move.url);
   }
   return moves;
  }

  private getSpecies(data: any): string {
   return data['species'].url;
  }

  private getSprite(data: any): string {
   return data['sprites'].front_default;
  }
  
  private getTypes(data: any): Array<string> {
   let t: any = data['types'];
   let types: Array<string> = [];

   for(var i = 0; i < t.length; i++){
    types.push(t[i].type.name);
   }
   return types;
  }

  getAbility(data: any): Ability{
   let ability: Ability;
   ability = {
    name: data.name,
    effect_entries: this.getEffects(data),
    flavor_text: this.getFlavorText(data)
   };
   return ability;
  }

  getMove(data: any): Move{
   let move: Move = {
    name: data.name,
    effect_entries: this.getEffects(data),
    flavor_text: this.getFlavorText(data)
   };
   return move;
  }

  private getEffects(data: any): Array<Effect> {
   let e: any = data['effect_entries'];
   let effects: Array<Effect> = [];
   let effect: Effect;

   for(var i = 0; i < e.length; i++){
    effect = {
      effect: e[i].effect,
      short_effect: e[i].short_effect
    };
    effects.push(effect);
   }
   return effects;
  }

  private getFlavorText(data: any): string {
   return data['flavor_text_entries'][2].flavor_text;
  }

  getSpecie(data: any): string{
   let s: any = data['flavor_text_entries'];
   return s[this.getIndexOfLanguage(s,'en')].flavor_text;
  }
  
  private getIndexOfLanguage(data: any, l: string): number{
   let i: number = 0;

   while(data[i].language.name != l && i < data.length){
    i++;
   }
   return i;
  }
}

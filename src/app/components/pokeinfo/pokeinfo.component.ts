import { Component, OnInit, DoCheck } from '@angular/core';
import { Pokemon } from '../../classes/pokemon';

import { PokegeneratorService } from '../../services/pokegenerator.service';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokeshareService } from '../../services/pokeshare.service';

let url: string = "https://pokeapi.co/api/v2/pokemon/";

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css']
})
export class PokeinfoComponent implements DoCheck {
  pokemon: Pokemon;
  name: string = '';

  constructor(
   private pokegeneratorService: PokegeneratorService,
   private pokeapiService: PokeapiService,
   private pokeshareService: PokeshareService
  ) { }

  ngDoCheck() {
   if (this.name != this.pokeshareService.name){
    this.name = this.pokeshareService.name;
    this.init();
   }
  }

  init(){
   this.pokeapiService.getPokeElement(url + this.name).subscribe(
    pokemon => {
     this.pokemon = this.pokegeneratorService.getPokemon(pokemon);
    }
   );
  }
}

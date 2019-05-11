import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../classes/pokemon';

import { PokegeneratorService } from '../../services/pokegenerator.service';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css']
})
export class PokeinfoComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
   private pokegeneratorService: PokegeneratorService,
   private pokeapiService: PokeapiService
  ) { }

  ngOnInit() {
   this.init();
  }

  init(){
   this.pokeapiService.getPokeElement("https://pokeapi.co/api/v2/pokemon/caterpie").subscribe(
    pokemon => {
     this.pokemon = this.pokegeneratorService.getPokemon(pokemon);
    }
   );
  }
}

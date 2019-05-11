import { Component, OnInit } from '@angular/core';

import { PokegeneratorService } from '../../services/pokegenerator.service';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokeshareService } from '../../services/pokeshare.service';

let pokedex: string = 'https://pokeapi.co/api/v2/pokedex/kanto';

@Component({
  selector: 'app-pokeform',
  templateUrl: './pokeform.component.html',
  styleUrls: ['./pokeform.component.css']
})
export class PokeformComponent implements OnInit {
  pokemons: Array<string>;
  name: string;

  constructor(
   private pokegeneratorService: PokegeneratorService,
   private pokeapiService: PokeapiService,
   private pokeshareService: PokeshareService
  ) { }

  ngOnInit() {
   this.init();
  }

  init(){
   this.pokeapiService.getPokeElement(pokedex).subscribe(
    data => {
     this.pokemons = this.pokegeneratorService.getPokemons(data);
    }
   );
  }

  go(){
   this.pokeshareService.name = this.name;
  }
}

import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Ability } from '../../classes/ability';

import { PokegeneratorService } from '../../services/pokegenerator.service';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokeability',
  templateUrl: './pokeability.component.html',
  styleUrls: ['./pokeability.component.css']
})
export class PokeabilityComponent implements OnInit {
  @Input() url: string;
  ability: Ability;

  constructor(
   private pokegeneratorService: PokegeneratorService,
   private pokeapiService: PokeapiService
  ) { }

  ngOnInit() {
    this.init();
  }

  init(){
   this.pokeapiService.getPokeElement(this.url).subscribe(
    data => {
     this.ability = this.pokegeneratorService.getAbility(data);
    }
   );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../classes/move';

import { PokegeneratorService } from '../../services/pokegenerator.service';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokemove',
  templateUrl: './pokemove.component.html',
  styleUrls: ['./pokemove.component.css']
})
export class PokemoveComponent implements OnInit {
  @Input() url: string;
  move: Move;

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
     this.move = this.pokegeneratorService.getMove(data);
    }
   );
  }
}

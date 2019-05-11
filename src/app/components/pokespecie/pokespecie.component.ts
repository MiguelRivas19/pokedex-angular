import { Component, OnInit, Input } from '@angular/core';

import { PokegeneratorService } from '../../services/pokegenerator.service';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-pokespecie',
  templateUrl: './pokespecie.component.html',
  styleUrls: ['./pokespecie.component.css']
})
export class PokespecieComponent implements OnInit {
  @Input() url: string;
  specie: string;

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
     this.specie = this.pokegeneratorService.getSpecie(data);
    }
   );
  }
}

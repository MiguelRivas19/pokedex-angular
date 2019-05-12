import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { PokegeneratorService } from '../../services/pokegenerator.service';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokeshareService } from '../../services/pokeshare.service';

@Component({
  selector: 'app-pokespecie',
  templateUrl: './pokespecie.component.html',
  styleUrls: ['./pokespecie.component.css']
})
export class PokespecieComponent implements OnInit, DoCheck {
  @Input() url: string;
  specie: string;

  constructor(
   private pokegeneratorService: PokegeneratorService,
   private pokeapiService: PokeapiService,
   private pokeshareService: PokeshareService
  ) { }

  ngOnInit() {
   this.init();
  }

  ngDoCheck() {
   if (this.url != this.pokeshareService.specie_url){
    this.pokeshareService.specie_url = this.url;
    this.init();
   }
  }

  init(){
   this.pokeapiService.getPokeElement(this.url).subscribe(
    data => {
     this.specie = this.pokegeneratorService.getSpecie(data);
    }
   );
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeshareService {
  name: string = '';
  specie_url: string = '';

  constructor() { }

}

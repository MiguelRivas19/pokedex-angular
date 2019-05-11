import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokeElement(url: string): any {
   return this.http.get(url);
  }
}

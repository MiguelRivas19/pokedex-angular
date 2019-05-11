import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { PokeapiService } from './services/pokeapi.service';
import { PokegeneratorService } from './services/pokegenerator.service';

import { AppComponent } from './app.component';
import { PokeabilityComponent } from './components/pokeability/pokeability.component';
import { PokeinfoComponent } from './components/pokeinfo/pokeinfo.component';
import { PokemoveComponent } from './components/pokemove/pokemove.component';
import { PokespecieComponent } from './components/pokespecie/pokespecie.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeabilityComponent,
    PokeinfoComponent,
    PokemoveComponent,
    PokespecieComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    PokeapiService,
    PokegeneratorService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

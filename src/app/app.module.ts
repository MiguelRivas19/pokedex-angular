import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokeapiService } from './services/pokeapi.service';
import { PokegeneratorService } from './services/pokegenerator.service';
import { PokeshareService } from './services/pokeshare.service';

import { AppComponent } from './app.component';
import { PokeabilityComponent } from './components/pokeability/pokeability.component';
import { PokeinfoComponent } from './components/pokeinfo/pokeinfo.component';
import { PokemoveComponent } from './components/pokemove/pokemove.component';
import { PokespecieComponent } from './components/pokespecie/pokespecie.component';
import { PokeformComponent } from './components/pokeform/pokeform.component';
import { KilogramPipe } from './pipes/kilogram.pipe';
import { MetrePipe } from './pipes/metre.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokeabilityComponent,
    PokeinfoComponent,
    PokemoveComponent,
    PokespecieComponent,
    PokeformComponent,
    KilogramPipe,
    MetrePipe,
    FilterPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    PokeshareService,
    PokeapiService,
    PokegeneratorService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

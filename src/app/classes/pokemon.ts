import { Ability } from './ability';
import { Move } from './move';

export class Pokemon {
 id: number;
 name: string;
 weight: number;
 height: number;
 abilities: Array<string>;
 moves: Array<string>;
 specie: string;
 sprite: string;                                                                                                                                                                             
 types: Array<string>;
}

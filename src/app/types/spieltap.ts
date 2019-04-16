import { Spiel } from './spiel';

export interface Spieltag {
    datum: string;
    spiele: Spiel[];
}
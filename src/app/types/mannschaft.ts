import { Staff } from './staff';

export interface Mannschaft {
    id: number,
    name: string,
    staff: Staff[],
    training: string,
    ifv: string,
    spielberichte: boolean,
    bild: string
}
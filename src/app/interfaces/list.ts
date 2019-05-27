import { Card } from './card';
export interface List{
    id:string;
    idBoard:string;
    name:string;
    cards:Card[];
}
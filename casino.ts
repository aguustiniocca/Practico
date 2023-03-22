import { JuegoDeCasino } from "./JuegoDeCasino";

export class Casino{
    private capacidad: number;
    private sector : number;
    private JuegoDeCasino: JuegoDeCasino[];

    public constructor(capacidad:number, sector:number, ){
        this.capacidad = capacidad;
        this.sector = sector;
        this.JuegoDeCasino = []
    }

    public getInfo(): Casino{
        return this 
    }

    public setCasinoGames(games:JuegoDeCasino){
        this.JuegoDeCasino.push(games)
    }
}
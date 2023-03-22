export class JuegoDeCasino {
    private name: string;
    private jugador: string;
    private fichas: number;


    public constructor( name: string,jugador:string, fichas:number ){
        this.name = name
        this.jugador = jugador
        this.fichas = fichas
    }

    getInfo(): JuegoDeCasino{
        return this
    }
    
}

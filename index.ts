import { JuegoDeCasino } from "./JuegoDecasino";
import { Poker } from "./Poker";
import { Ruleta } from "./ruleta";
import { Casino } from "./casino";


const ruleta = new Ruleta("ruleta","arnold",3,1);
const poker = new Poker("poker","ronnie",4,6);

ruleta.getInfo();
 console.log(ruleta);
 
 poker.getInfo()
 console.log(poker);

 
const casino = new Casino(800, 806, )
casino.setCasinoGames(ruleta);
casino.setCasinoGames(poker);

casino.getInfo();
console.log(casino)
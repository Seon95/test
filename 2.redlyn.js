import rl from "readline-sync"

let hoeveelkeer = rl.question("Hoeveel vrienden")

console.log(hoeveelkeer)

const namen = [];
for (let index = 1; index <= hoeveelkeer; index++) {
    
    let vraag = rl.question(`Geef vriend ${index} in`);
    namen.push(vraag);
}



console.log(namen);
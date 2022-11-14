// // Pas de oefening aan over bmi zodat er een gewicht en een lengte variabele bestaat voor
//  twee verschillende personen. Maak ook een variabele aan die de naam van de persoon bevat. 
//  Toon de naam van de persoon met zijn bij behorende bmi op het scherm.
// // Zorg ervoor dat de BMI deze keer afgrond is aan de hand van Math.round te gebruiken.




function BMI(naam,gewicht,hoogte){

return ` ${naam} heeft een bmi van ${Math.round(gewicht/(hoogte*hoogte))}`

}

console.log(BMI("maro",55,1.66))



// In je programma hou je je startbezit bij, de rentevoet en het aantal jaren. Je mag deze getallen in je code zetten.
// De rentevoet bepaalt met welke hoeveelheid je bezit op een jaar stijgt. Bijvoorbeeld, als je rentevoet 2% is en 
// je startbedrag is 100 euro:
// na één jaar bezit je 102 euro (er is 2% van 100 bij gekomen)
// na twee jaar bezit je 104,04 euro (er is 2% van 102 bij gekomen)
// enzovoort
// Voorbeeldinteractie
// Op een periode van 7 jaar stijgt je bezit van €100000 naar €114868.56676492801 bij een rentevoet van 0.020000000000000018


function rente(start,rente,jaren){

    return `Op een periode van ${jaren} stijgt je bezit van ${start} naar ${(start*(rente*jaren)+start)} bij een rentevoet van ${rente}`
}

console.log(rente(100,0.02,2))



// Technische analyse
// Maak een variabele lottoNumbers die een string bevat met 6 lotto cijfers gescheiden door komma's,
//  zonder spaties. 
// De lotto cijfers bestaan altijd uit 2 getallen en indien het getal kleiner 
// is als 10 wordt het voorafgegaan door een 0. Bv: 05,08,13,18,27,44
// Gebruik de juiste methode om de cijfers uit te string te "knippen" en gebruik het 
// karakter | om de uitvoer te scheiden.


function lottoNimbers(str){

return str.split(",").map(function(get){

if(get < 10 ){
    return `0${get}`;
   
} else{
    return get;
}



}).join("|");





}
console.log(lottoNimbers("1,2,33,4,50,60"))



// Het e-mailadres kan je in een variabele email plaatsen.

// We veronderstellen dat de variabele een juist e-mailadres bevat.

// Voorbeeld interactie
// De eigenaar van david.verhulst@inventivemedia.be heet DAVID VERHULST

function getname(strr){

    return strr.slice(0,strr.indexOf("@")).split(".").join(" ").toUpperCase()
}

console.log(getname("david.verhulst@inventivemedia.be"))



// Je voorziet twee variabelen voor voor en achternaam. Daarna zorg je ervoor dat 
// je enkel de eerste letter van de voornaam zichtbaar is.

// Let er op dat de variabelen ook zonder hoofdletters kunnen ingegeven worden.

// Je kan deze string opbouwen aan de hand van string interpolatie.


function naame(naam,achternaam){

    return naam.slice(0,1).toUpperCase() + " " + achternaam.charAt(0).toUpperCase() + achternaam.slice(1);;
}


console.log(naame("maro","ajti"))




function tekening(tekst){
const bar = "-";
return "/"+bar.repeat(tekst.length)+ "\\"  + "\n" + "|" + tekst + "|" + "\n" + "\\"+bar.repeat(tekst.length)+ "/"


}
console.log(tekening("hallooooooo"))



function inputString(string){

return string.split("").map(function(letterr){

if(letterr == "a"){
    return "n"
}

if(letterr == "b"){
    return "o"
}

if(letterr == "c"){
    return "p"
}

if(letterr == "d"){
    return "q"
}

if(letterr == "a"){
    return "n"
}




else return letterr

})

}
console.log(inputString("Vab"))




// De gebruiker voert een jaartal in en jouw programma toont of het al dan niet een schrikkeljaar is. Een schrikkeljaar is deelbaar door 4, behalve als het ook deelbaar is door 100, tenzij het wél deelbaar is door 400.

function schrikkeljaar(jaar){

    if(jaar%4 == 0 && jaar/100 != 0 && jaar/400 == 0){
        return "Het is een schrikkeljaar";
    }
    else{return "Het is geen schrikkeljaar"}


    


}

console.log(schrikkeljaar(400))


function rekenmachine(getal1,getal2,berekening){

if(berekening =="vermenigvuldiging"){
    return getal1 * getal2;
}
else if(berekening == "deling"){
    return getal1/getal2;
}

else if(berekening == "som"){
    return getal1+getal2;
} 

else if (berekening == "aftrekken"){
    return getal1-getal2;
}

}


console.log(rekenmachine(2,3,"vermenigvuldiging"))

// while//
function raster(getal,aantal){

 let i = 0;
 let result = "";
  while (i < aantal) {

    result += getal * i; i++
  }
     return result.split("");
    }
    



console.log(raster(2,5))




function teRadenGetal(n){

let x = 25;

while (n != x) {

}

}

const namenarray = ["maro","morad","moaad","amira"];
const achternaamarray = ["ajtirah","benhisa","sahli","akalai","driouech"]

// let volledignaaaam = "";
// for (let index = 0; index < namen.length; index++) {
    
// volledignaaaam += namen[index] + " " + achternaam[index] +"\n";
    
// }
// console.log(volledignaaaam)


function getnamefull(nombre,apellido){
    
if(nombre.length != apellido.length){
    return "Er klopt iets niet"
}
else{



    let volledignaaaam = "";
    for (let index = 0; index < nombre.length; index++) {
    
        volledignaaaam += nombre[index] + " " + apellido[index] +"\n";
}
return volledignaaaam
}
}

console.log(getnamefull(namenarray,achternaamarray))






// const grades = [16,12,16,7,17,14,9,8,18,12];
// let som = 0;

// for (let index = 0; index < grades.length; index++) {
    
//     som += grades[index] 
// }

// const gemiddeldee = som/(grades.length)

// console.log(gemiddeldee);



//gmeiddelde met for-loop//

const grades = [16,12]
function medium(arrayyyyy){
 let som = 0;

 for (let index = 0; index < arrayyyyy.length; index++) {
    
    som += arrayyyyy[index]
    
 }
   return som/(arrayyyyy.length) 
}

console.log(medium(grades))


// aantal gebuisd met for-loop//
function gebuisd(arrayy){

    let fails = [];
    for (let index = 0; index < arrayy.length; index++) {

  if(arrayy[index] < 10){

    
    fails.push(arrayy[index])
    }
     }


    return fails.length
}

console.log(gebuisd(grades))


console.log(medium(grades))



let spreadsheet = [
    [100, 104, 105],
    [144, 110, 109],
    [105, 107, 111]
];

console.log(spreadsheet[1][1])
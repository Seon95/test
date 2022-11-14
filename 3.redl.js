import rl from "readline-sync"



const vraag = rl.question("Geef punten door");
const grades =  vraag.split(",");
console.log(grades)


function medium(arrayyyyy){
    let som = 0;
   
    for (let index = 0; index < arrayyyyy.length; index++) {
       
       som += arrayyyyy[index]
       
    }
      return som/(arrayyyyy.length) 
   }
   
 
   
   
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
   

   console.log(medium(grades))
   console.log(gebuisd(grades))


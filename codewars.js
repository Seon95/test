



// const string =("loser");
// function disemvowel(str) {



// return str.replace(/[re]/gi," ");

// }

// console.log(disemvowel("loser"));



// function isSquare(n){

// if(Math.sqrt(n) - Math.floor(Math.sqrt(n)) !== 0){

//     return false;
// }else {return true;}




// }


// function isIntegeer(num) {

//     return Number.isInteger(num);
// }

// console.log(isIntegeer(3.4))

// const nn = (2115);
// console.log(nn.toString().split("").sort().reverse().join("")*1)



// function filter_list(l) {
//     return l.filter(Number.isInteger);
//   }

//   console.log(filter_list([1,2,'a','b']))


function findShort(s){

    const ss= s.split(" ");
    return ss.filter(function(sss){
     sss.length
    })
    
    
   
}

console.log(findShort("Poej terss ueyts"))
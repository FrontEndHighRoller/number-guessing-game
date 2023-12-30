const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message = "";

let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
//
//do {
//  guess = prompt("Guess a number from 1 to 10");
//  attempts++;
//
//  if (parseInt(guess) === randomNumber) {
//    message = `It took you ${attempts} tries to guess the number ${randomNumber}`;
//    break;
//    
//  }else{
//  message = `it was number ${randomNumber} access denied`
//  
//  
//  }
//} while (attempts < 10);
//
//
//main.innerHTML = `<h1>${message}</h1>`;
//


for(let i = 1; i <= 10; i++){
  guess = prompt("Guess a number from 1 to 10");
  
  
    if (parseInt(guess) === randomNumber) {
    message = `It took you ${i} tries to guess the number ${randomNumber}`;
    break;
    
  }else{
  message = `it was number ${randomNumber} access denied`
}
  
}

//  3) Display a message letting the user know they guessed the number
main.innerHTML = `<h1>${message}</h1>`;

   

   

  

  






/* note: 
1. remeber the exclamation point is called a logical NOT operator (!). As long as the users guess does not equal the randomNumber it will evaluate to true and loop will run again until the user guess the right number.
If it valuetes to false the loop ends and the rest of the program can run.
example: }while(parseInt(guess) !== randomNumber){

2. here is example two versions of loop for look is now running and commented do while loop is above. The only diference is that in for loop attemps we added i. 

*/
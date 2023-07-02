// const { random } = require("lodash");

const Quote = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
] ; 
  

const GenerateQuotes = () => {
    let min = 0 ;
    let max = Quote.length - 1  ;
    let ele = document.getElementById('par'); // Replace 'myElement' with the ID of your HTML element
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(Quote[randomNumber] , randomNumber) ; 

    ele.innerText = Quote[randomNumber] ;
};

  
let ele = document.getElementById('myElement'); // Replace 'myElement' with the ID of your HTML element
ele.addEventListener('click', GenerateQuotes);
  

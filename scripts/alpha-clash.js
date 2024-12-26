//function play()
//{ 
  //  const home = document.getElementById('home-section');
//home.classList.add('hidden');

//const playground=document.getElementById('play-ground');
//playground.classList.remove('hidden')
//}



//function continueGame(){
 // const alphabet = getARandomAlphabet();
//console.log(alphabet);
  //const currentAlphabetElement = document.getElementById('current-alphabet');
  //currentAlphabetElement.innerText = alphabet;

//setBgColorById(alphabet);
//}

//function handleKeyboardButtonPress(){
  //console.log('button pressed');
//}
//document.addEventListener('keyup',handleKeyboardButtonPress);

function handleKeyboardButtonPress(event){
  const playerPress = event.key;
  console.log('player Press',playerPress );

  if(playerPress==='Escape'){
    gameOver();
  }

const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPress, expectedAlphabet);

if(playerPress===expectedAlphabet){
  console.log('you get a point');
 // console.log('you have correctly',expectedAlphabet);
 const currentScore=getTextElementValueById('current-score');
const updateScore=currentScore + 1;
setTextElementValueById('current-score',updateScore);



 //const currentScoreElement=document.getElementById('current-score');
 //const currentScoreText=currentScoreElement.innerText;
//const currentScore=parseInt(currentScoreText);
//const newScore=currentScore + 1;
//currentScoreElement.innerText=newScore
 removeBgColorById(expectedAlphabet);
  continueGame();
}
else{
//console.log('you missed.you lost a life');

const currentLife=getTextElementValueById('current-life');
const updateLife = currentLife - 1;
setTextElementValueById('current-life',updateLife);

if(updateLife===0){
 // console.log('game over');
 gameOver();
}


//------
//const currentLifeElement=document.getElementById('current-life');
//const currentLifeText=currentLifeElement.innerText;
//const currentLife=parseInt(currentLifeText);
//const newLife=currentLife - 1 ;
//currentLifeElement.innerText=newLife;
}
}
document.addEventListener('keyup',handleKeyboardButtonPress);




function continueGame(){
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

setBgColorById(alphabet);
}


function play()
{ 
hideElementById('home-section');
showElementById('play-ground');
hideElementById('final-score');

setTextElementValueById('current-life',5);
setTextElementValueById('current-score',0);

continueGame();
}


function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
 const lastScore=getTextElementValueById('current-score');
 setTextElementValueById('last-score',lastScore);
 const currentAlphabet=getElementTextById('current-alphabet');
 removeBgColorById(currentAlphabet);
}
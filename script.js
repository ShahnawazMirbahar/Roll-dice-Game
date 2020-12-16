alert('The Rules Of this Game are very simple :' + '\n 1.Roll to achieve points.'  +'\n 2.Rolling 1 will make you loose all the points.'  +'\n 3.To avoid it Simply Hold Your Points by pressing HOLD.'   +'\n 4.Score 100 to win the game.......');
var scores,roundScore,activePlayer,gameActive;

init(); 








document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gameActive){
        // generate random number
    var dice =Math.floor(Math.random()*6+1);
    
    // display the number
     var diceDOM = document.querySelector('.dice')
    diceDOM.style.display ='block';
    diceDOM.src='dice-'+dice +'.png'
    
    
    // update the number if it is not 1
    
    if(dice >1)
        {
            //add the score
            roundScore += dice;
            document.querySelector('#current--'+activePlayer).textContent = roundScore;
            
        }
    else
        {
            //document.querySelector('.dice').style.display='none';
            //next player
            nextPlayer();
            
}
        
    }
    
    
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gameActive)
        {
          
    //add current score to global score
    scores[activePlayer] +=roundScore;

    
    // update the UI
    document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer];
   
   
    //if the player won the game
    if(scores[activePlayer]>=100)
        {
            document.querySelector('#name--'+activePlayer).textContent='WINNERRRRR!!!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player--'+activePlayer).classList.add('player--winner'); 
             document.querySelector('.player--'+activePlayer).classList.remove('player--active'); 
            gameActive = false;
            
        }
    else
        {  //next player
             document.querySelector('.dice').style.display='none';
              nextPlayer();
        }  
            
        }
    
   
    
});

document.querySelector('.btn--new').addEventListener('click', init);

function init()
{
     scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameActive = true;
    
document.querySelector('.dice').style.display ='none';

document.getElementById('score--0').textContent ='0';

document.getElementById('score--1').textContent ='0';

document.getElementById('current--0').textContent ='0';

document.getElementById('current--1').textContent ='0';
    
document.getElementById('name--0').textContent='Player 1';
document.getElementById('name--1').textContent='Player 2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');

    
}

function nextPlayer()
{
activePlayer === 0 ? activePlayer =1 : activePlayer= 0;
roundScore=0
document.getElementById('current--0').textContent ='0';

document.getElementById('current--1').textContent ='0';

document.querySelector('.player--0').classList.toggle('player--active');
document.querySelector('.player--1').classList.toggle('player--active');
    
}


//console.log(dice);


//document.querySelector('#current--'+activePlayer).textContent = dice;
//document.querySelector('#current--'+activePlayer).innerHTML='<em>'+dice+'</em>';
//var x = document.querySelector('#score--0').textContent;
// console.log(x);
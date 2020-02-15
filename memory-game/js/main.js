const cards = ["queen", "queen", "king", "king"];
Let cardsInPlay = [];

Let checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]){ 
            alert('You found a match!');
          }

         else {
              alert('Sorry, try again.');      
            }
}

Let flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[0]);
if (cardsInPlay.length === 2) {

checkForMatch();
}
}

flipCard(0);
flipCard(2);
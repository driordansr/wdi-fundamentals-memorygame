const cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardimage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardimage: "images/queen-of-diamonds.png"
},
{
	rank: 'kings',
	suit: 'hearts',
	cardimage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardimage: "images/king-of-diamonds.png"
},
];
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
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2) {

checkForMatch();

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);	
}
}

flipCard(0);
flipCard(2);
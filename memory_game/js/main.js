var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "queen-of-diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
	 	if (cardsInPlay[0]===cardsInPlay[1])
	 		{
	 		alert("You found a match!");
	 		}
	 	else 
	 		{
	 		alert("Sorry, try again!");
	 		}
	}
}

function flipcard(cardId) {
	console.log("User flipped "  + cards[cardId].rank +  " of "  + cards[cardId].suit +  " " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

flipcard(0);
flipcard(1);
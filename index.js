
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['♠', '♥', '♣', '♦'];
const CARDVAULES = { '2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10': 10, 'J' : 11, 'Q' : 12, 'K' : 13, 'A' : 14};
let player1 
let player2 

/* fist class to determine card drawn/played and the value*/
 
class Deck {
    constructor(allCards = newDeck()) {
        this.allCards = allCards

    }

        get numberOfCards() {
        return this.allCards.length
    }
   // grabs the all.cards length and counts backwards through for loop. Random index for our current index and then swaps it with another card.
    shuffle() {
        for(let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldIndex = this.allCards[newIndex]
            this.allCards[newIndex] = this.allCards[i]
            this.allCards[i] = oldIndex
        }
    }    
}
class NewCard {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
// this combines the values and suits array with every card option so its completely random
   function newDeck() {
        return SUITS.flatMap(suit => {
            return VALUES.map(value => {
                return new NewCard(suit, value)
            })
    })
   }

   /*class DealCards {
    constructor(player1, player2) {
        this.player1 = 
        this.player2 = 
    } 
   }*/

beginGame()
    function beginGame() {
        const deck = new Deck();
        deck.shuffle()

        halfDeck = (deck.numberOfCards / 2) // cuts the deck in half
        player1 = new Deck(deck.allCards.slice(0, halfDeck))
        player2 = new Deck(deck.allCards.slice(halfDeck, deck.numberOfCards))

        console.log(player1)
        console.log(player2)
        }

        if(youGetAPoint(player1, player2)) {
        let i = 0
        let j = 0
            if(player1 > player2 ) {
                player1 = i + 1
            }
           } else {
            player2 = j + 1
           }
        
           function youGetAPoint(cardOne, cardTwo) {
            return CARDVAULES[cardOne.value] > CARDVAULES[cardTwo.value]
           }
        
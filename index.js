
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const SUITS = ['♠', '♥', '♣', '♦']

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
const deck = new Deck();

class Dealer {
    constructor(player1, player2) {
        this.player1 = [];
        this.player2 = [];
    }
}
    

begin()
    function beginGame() {
       shuffle()
       newDeck()
        for(let i = 0; i < this.player1.length; i++) {
            push.newDeck(player1[i])
        }
    }
    
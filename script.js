window.onload = function () {

    //define cards
    var cards =
        [
            "cards/Spades/2S.svg",
            "cards/Spades/3S.svg",
            "cards/Spades/4S.svg",
            "cards/Spades/5S.svg",
            "cards/Spades/6S.svg",
            "cards/Spades/7S.svg",
            "cards/Spades/8S.svg",
            "cards/Spades/9S.svg",
            "cards/Spades/10S.svg",
            "cards/Spades/JS.svg",
            "cards/Spades/QS.svg",
            "cards/Spades/KS.svg",
            "cards/Spades/AS.svg",

            "cards/Hearts/2H.svg",
            "cards/Hearts/3H.svg",
            "cards/Hearts/4H.svg",
            "cards/Hearts/5H.svg",
            "cards/Hearts/6H.svg",
            "cards/Hearts/7H.svg",
            "cards/Hearts/8H.svg",
            "cards/Hearts/9H.svg",
            "cards/Hearts/10H.svg",
            "cards/Hearts/JH.svg",
            "cards/Hearts/QH.svg",
            "cards/Hearts/KH.svg",
            "cards/Hearts/AH.svg",

            "cards/Diamonds/2D.svg",
            "cards/Diamonds/3D.svg",
            "cards/Diamonds/4D.svg",
            "cards/Diamonds/5D.svg",
            "cards/Diamonds/6D.svg",
            "cards/Diamonds/7D.svg",
            "cards/Diamonds/8D.svg",
            "cards/Diamonds/9D.svg",
            "cards/Diamonds/10D.svg",
            "cards/Diamonds/JD.svg",
            "cards/Diamonds/QD.svg",
            "cards/Diamonds/KD.svg",
            "cards/Diamonds/AD.svg",

            "cards/Clubs/2C.svg",
            "cards/Clubs/3C.svg",
            "cards/Clubs/4C.svg",
            "cards/Clubs/5C.svg",
            "cards/Clubs/6C.svg",
            "cards/Clubs/7C.svg",
            "cards/Clubs/8C.svg",
            "cards/Clubs/9C.svg",
            "cards/Clubs/10C.svg",
            "cards/Clubs/JC.svg",
            "cards/Clubs/QC.svg",
            "cards/Clubs/KC.svg",
            "cards/Clubs/AC.svg",
            "none"
        ],


        //Meet card, the Object!
        card = function ()
        {
            this.value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "no value"];
            this.suit = ["S", "H", "D", "C", "no s"];
            this.name = this.value[chosenValue] + this.suit[chosenSuit];

            this.suitFolder = ["Spades", "Hearts", "Diamonds", "Clubs", "no suit"];
            this.imgLocation = "cards/" + suitFolder[chosenSuit] + "/" + this.name + ".svg";

            this.chosenSuit = 4;
            this.chosenValue = 13;
            this.cardNumber = 52;

            this.numToSuitAndValue = function () {
                if      (this.cardNumber <= 12) { this.chosenSuit = 0; this.chosenValue = this.cardNumber }
                else if (this.cardNumber <= 25) { this.chosenSuit = 1; this.chosenValue = this.cardNumber - 12 }
                else if (this.cardNumber <= 38) { this.chosenSuit = 2; this.chosenValue = this.cardNumber - 25 }
                else                            { this.chosenSuit = 3; this.chosenValue = this.cardNumber - 38 };
            };

            this.back = { blue: "backs/Blue_Back.svg", red: "backs/Red_Back.svg" };
            this.selectedBack = "blue"

        };


/*

*/

        //define vars
        kaartenVlak = document.getElementById('kaartenVlak'),
        buttonNewCard = document.getElementsByTagName('button'),
        achter = back.bb,
        card1 = 52,
        usedCards = [52],
        kNum = 1,
        kVw = 6,

        //define functions
        randomCardPicker = function () {
            card1 = Math.round(Math.random() * 51);
        },

        random52 = function () {
            randomCardPicker();
            if (usedCards[0] == 52 && usedCards.length > 1) {
                usedCards.shift()
            }
            if (usedCards.length > 51) {
                if (confirm("shuffle deck?")) {
                    usedCards = [52];
                }
            }
            for (var i = 0 ; i < usedCards.length ; i++) {
                if (usedCards[i] == card1) {
                    randomCardPicker();
                }
            }
            usedCards.push(card1);
            return card1;
        },
        addCard = function ()
        {
            //new card();
            kNum += 1;
            kVw += 8;
            kaartenVlak.innerHTML += '<img id="k' + kNum + '" class="kaart" style = "left:' + kVw + 'vw" src=' + cards[random52()] + ' />';
        };

    //call it all
    kaartenVlak.innerHTML += '<img id="k1" class="kaart" src=' + cards[random52()] + ' />';

    buttonNewCard[0].addEventListener("click", addCard);

/*
cardIndeces =
{
    clubs: "0 - 12",
    diamonds: "13 - 25",
    hearts: "26 - 38",
    spades: "39 - 51",
}

video poker
paytable:
Royal Flush    1000 (was 800)
Straight Flush   50
Four of a kind   25
Full House        9
Flush             6
Straight          4
Three of a kind   3
Two Pair          2
Jacks or better   1
this.value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "no value"];
index          0    1    2    3    4    5    6    7    8     9   10   11   12   13

van de vijf
JacksOrBetter = 2x cards.value[9 of hoger]
Two pair = 2x ( 2x cards.value[x] )
ThreeOfAKind = 3x cards.value[x]
Straight = 4x (lowest) =+1
Flush = k1.suit == ("k" + x).suit
FullHouse = ( 2x cards.value[x] ) + ( 3x cards.value[x] )
StraightFlush = (4x (lowest) =+1) + kaart(x).suit
Royal Flush = (4x (lowest) =+1) + kaart(x).suit, lowest = 10

*/
};

window.onload = function () {

    var cards =
        //define cards
        [
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
            "none"
        ],
        cardIndeces =
        {
            clubs: "0 - 12",
            diamonds: "13 - 25",
            hearts: "26 - 38",
            spades: "39 - 51",
        },
        back =
        {
            bb: "backs/Blue_Back.svg",
            rb: "backs/Red_Back.svg"
        },

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
            kNum += 1;
            kVw += 8;
            kaartenVlak.innerHTML += '<img id="k' + kNum + '" class="kaart" style = "left:' + kVw + 'vw" src=' + cards[random52()] + ' />';
        };

    //call it all
    kaartenVlak.innerHTML += '<img id="k1" class="kaart" src=' + cards[random52()] + ' />';

    buttonNewCard.onclick = function () { addCard() };


    /*
    kaartenVlak.innerHTML += '<img id="k2" class="kaart" src=' + cards[random52()] + ' />';
    kaartenVlak.innerHTML += '<img id="k3" class="kaart" src=' + cards[random52()] + ' />';
    kaartenVlak.innerHTML += '<img id="k4" class="kaart" src=' + cards[random52()] + ' />';
    kaartenVlak.innerHTML += '<img id="k5" class="kaart" src=' + cards[random52()] + ' />';
    kaartenVlak.innerHTML += '<img id="k6" class="kaart" src=' + cards[random52()] + ' />';
    kaartenVlak.innerHTML += '<img id="k7" class="kaart" src=' + cards[random52()] + ' />';
    */

};

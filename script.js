/*window.onload = function ()
{*/
    var clubs =
        [
            //index 0
            { II: "cards/Clubs/2C.svg" },
            //index 1
            { III: "cards/Clubs/3C.svg" },
            //index 2
            { IV: "cards/Clubs/4C.svg" },
            //index 3
            { V: "cards/Clubs/5C.svg" },
            //index 4
            { VI: "cards/Clubs/6C.svg" },
            //index 5
            { VII: "cards/Clubs/7C.svg" },
            //index 6
            { VIII: "cards/Clubs/8C.svg" },
            //index 7
            { IX: "cards/Clubs/9C.svg" },
            //index 8
            { X: "cards/Clubs/10C.svg" },
            //index 9
            { J: "cards/Clubs/JC.svg" },
            //index 10
            { Q: "cards/Clubs/QC.svg" },
            //index 11
            { K: "cards/Clubs/KC.svg" },
            //index 12
            { A: "cards/Clubs/AC.svg" }
        ],

        diamonds =
        [
            { 2: "cards/Diamonds/2D.svg" },
            { 3: "cards/Diamonds/3D.svg" },
            { 4: "cards/Diamonds/4D.svg" },
            { 5: "cards/Diamonds/5D.svg" },
            { 6: "cards/Diamonds/6D.svg" },
            { 7: "cards/Diamonds/7D.svg" },
            { 8: "cards/Diamonds/8D.svg" },
            { 9: "cards/Diamonds/9D.svg" },
            { 10: "cards/Diamonds/10D.svg" },
            { J: "cards/Diamonds/JD.svg" },
            { Q: "cards/Diamonds/QD.svg" },
            { K: "cards/Diamonds/KD.svg" },
            { A: "cards/Diamonds/AD.svg" },
        ],

        hearts =
        [
            { 2: "cards/Hearts/2H.svg" },
            { 3: "cards/Hearts/3H.svg" },
            { 4: "cards/Hearts/4H.svg" },
            { 5: "cards/Hearts/5H.svg" },
            { 6: "cards/Hearts/6H.svg" },
            { 7: "cards/Hearts/7H.svg" },
            { 8: "cards/Hearts/8H.svg" },
            { 9: "cards/Hearts/9H.svg" },
            { 10: "cards/Hearts/10H.svg" },
            { J: "cards/Hearts/JH.svg" },
            { Q: "cards/Hearts/QH.svg" },
            { K: "cards/Hearts/KH.svg" },
            { A: "cards/Hearts/AH.svg" },
        ],

        spades =
        [
            { 2: "cards/Spades/2S.svg" },
            { 3: "cards/Spades/3S.svg" },
            { 4: "cards/Spades/4S.svg" },
            { 5: "cards/Spades/5S.svg" },
            { 6: "cards/Spades/6S.svg" },
            { 7: "cards/Spades/7S.svg" },
            { 8: "cards/Spades/8S.svg" },
            { 9: "cards/Spades/9S.svg" },
            { 10: "cards/Spades/10S.svg" },
            { J: "cards/Spades/JS.svg" },
            { Q: "cards/Spades/QS.svg" },
            { K: "cards/Spades/KS.svg" },
            { A: "cards/Spades/AS.svg" },
        ],

        back =
        {
            bb: "backs/Blue_Back.svg",
            rb: "backs/Red_Back.svg"
        },
        deck =
        [
            clubs,
            diamonds,
            hearts,
            spades
        ],

        achter = back.bb,
        kaartenVlak = document.getElementById('kaartenVlak');


    kaartenVlak.innerHTML += '<img id="k1" class="kaart" src=' + kaart.sA + ' />';
    kaartenVlak.innerHTML += '<img id="k2" class="kaart" src=' + kaart.sK + ' />';


    //functional deck of cards/card shuffler

    suit = Math.random


/*
        randomCardNumber = (Math.random() * 52),
        randCard = Math.round(randomCardNumber)
*/



/*};*/

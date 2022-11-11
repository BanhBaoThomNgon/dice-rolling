var randomNumber = Math.floor(Math.random() * 6) + 1;
let getImgDice1 = 'images/dice' + randomNumber + '.png';
document.querySelectorAll('img')[0].setAttribute("src", getImgDice1);

function rollFirstDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    let getImgDice1 = 'images/dice' + randomNumber + '.png';
    document.querySelectorAll('img')[0].setAttribute("src", getImgDice1);
}

var randomNumber = Math.floor(Math.random() * 6) + 1;
let getImgDice2 = 'images/dice' + randomNumber + '.png';
document.querySelectorAll('img')[1].setAttribute("src", getImgDice2);

function rollSecondDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    let getImgDice2 = 'images/dice' + randomNumber + '.png';
    document.querySelectorAll('img')[1].setAttribute("src", getImgDice2);
}
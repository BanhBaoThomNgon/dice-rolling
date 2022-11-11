// roll first dice
var randomNumberOne = Math.floor(Math.random() * 6) + 1;
let getImgDice1 = 'images/dice' + randomNumberOne + '.png';
document.querySelectorAll('img')[0].setAttribute("src", getImgDice1);
// roll second dice
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;
let getImgDice2 = 'images/dice' + randomNumberTwo + '.png';
document.querySelectorAll('img')[1].setAttribute("src", getImgDice2);

function rollFirstDice() {
    var randomNumberOne = Math.floor(Math.random() * 6) + 1;
    let getImgDice1 = 'images/dice' + randomNumberOne + '.png';
    document.querySelectorAll('img')[0].setAttribute("src", getImgDice1);
    }
function rollSecondDice() {
    var randomNumberTwo = Math.floor(Math.random() * 6) + 1;
    let getImgDice2 = 'images/dice' + randomNumberTwo + '.png';
    document.querySelectorAll('img')[1].setAttribute("src", getImgDice2);
    }

function rollBoth() {
    var randomNumberOne = Math.floor(Math.random() * 6) + 1;
    let getImgDice1 = 'images/dice' + randomNumberOne + '.png';
    document.querySelectorAll('img')[0].setAttribute("src", getImgDice1);
    
    var randomNumberTwo = Math.floor(Math.random() * 6) + 1;
    let getImgDice2 = 'images/dice' + randomNumberTwo + '.png';
    document.querySelectorAll('img')[1].setAttribute("src", getImgDice2);

}
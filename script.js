
let computerNum = Math.floor(Math.random() * 100) + 1;
let userNum = prompt("Угадай число от 1 до 100");
console.log(computerNum);

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const guessNum = function () {
    function compareNum () {
        if (userNum == computerNum){
            alert("Поздравляю, Вы угадали!!!");
        } else if (userNum === "" || isNaN(Number(userNum))) {
            userNum = prompt("Введи число!!");
            guessNum();
        }else if (!isNumber(userNum)) {
            alert("Игра окончена");
        } else if (userNum > computerNum){
            alert("Загаданное число меньше");
            userNum = prompt("Введи новое число");
            guessNum();
        } else if (userNum < computerNum) {
            alert("Загаданное число больше");
            userNum = prompt("Введи новое число");
            guessNum();       
        }
    }
    compareNum();
};

guessNum(userNum);
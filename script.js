
let computerNum = Math.floor(Math.random() * 99) + 1;
const attempts = 10;
let userAttempts = 0;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const guessNum = function () {
    let userNum = prompt("Угадай число от 1 до 100");
    function compareNum () {
        if (userNum == computerNum){
            if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                userAttempts = 0;
                guessNum();
            }
        } else if (userAttempts == 9){
            if (confirm("Попытки закончились, хотите сыграть еще?")) {
                userAttempts = 0;
                guessNum();
            }
        } else if (userNum === "" || userNum === " " || isNaN(Number(userNum))) {
            userNum = prompt("Введи число!!");
            compareNum();
        } else if (!isNumber(userNum)) {
            alert("Игра окончена");
        } else if (userNum > computerNum){
            userAttempts++;
            alert("Загаданное число меньше, осталось попыток " + (attempts - userAttempts));
            userNum = prompt("Введи новое число");
            compareNum();
        } else if (userNum < computerNum) {
            userAttempts++;
            alert("Загаданное число больше, осталось попыток " + (attempts - userAttempts));
            userNum = prompt("Введи новое число");
            compareNum();     
        } 
    }
    compareNum();
};

guessNum();
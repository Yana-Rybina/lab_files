function getNumber() {
    var num = prompt("Введите число больше 100:",'');
    while (num < 100) {
        if (num == null){
            break;
        }
        num = prompt("Число меньше 100! Попробуйте еще раз!", '');

    }
}
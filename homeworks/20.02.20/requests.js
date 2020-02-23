function nameJS() {
    var name = prompt('Какое \"официальное\" название JavaScript?', '');
    if (name.toLowerCase() === 'ecmascript'){
        alert('Верно!');
    }
    else {
        alert('Не знаете? \"EcmaScript\"!');
    }
}
function MoreLess() {
    var x = prompt('Введите любое число:','');
    if (x > 0){
        alert('1');
    }
    else if (x < 0){
        alert('-1');
    }
    else if (x == 0){
        alert('0');
    }
}
function login() {
    var name = prompt('Кто пришел?','');
    if (name == null){
        alert('Вход отменен!');
    }
    else if (name.toLowerCase() == 'админ'){
        var password = prompt('Пароль?','');
        if (password == null){
            alert('Вход отменен!');
        }
        else if (password.toLowerCase() == 'черный властелин'){
            alert('Добро пожаловать!');
        }
        else {
            alert('Пароль неверен');
        }
    }
    else {
        alert('Я Вас не знаю');
    }
}
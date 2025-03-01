const loadDOM = (path) => {
    //уміє загружати дом
    let xhr = new XMLHttpRequest();
    xhr.open("GET", path, false); //загрузка буде проведена синхронно
    xhr.send();
    document.write(xhr.response); //записуємо результат роботи html-розмітку
    // тут document = body
}
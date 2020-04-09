let menuItems = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu');

menu.insertBefore(menuItems[1], menuItems[3]);

document.body.style.backgroundImage = "'url('img/apple_true.jpg')";

let adv = document.querySelector('.adv'),
    //title = document.querySelector('.title'),
    title = document.getElementById('title'),
    prompts = document.getElementById('prompt'),
    columns = document.getElementsByClassName('column');



title.textContent = "Мы продаем только подлинную технику Apple";
columns[1].removeChild(adv);

let qw = prompt("Ваше отношение к технике apple?", '');

if ((typeof(qw)) != null) {
    prompts.textContent = qw;
}

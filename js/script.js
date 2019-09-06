let adv = document.getElementsByClassName('adv')[0],
	title = document.getElementById('title'),
	menu = document.getElementsByClassName('menu')[0],
	menuItem = document.getElementsByClassName('menu-item'),
	menuItemLi = document.createElement("li"),
	promptforApple = document.querySelector("#prompt");




adv.remove(); //удаление рекламы

title.textContent = "Мы продаем только подлинную технику Apple" //добавление текста

document.body.style.backgroundImage = "url('img/apple_true.jpg')";  //изменение фона

menu.insertBefore(menuItem[2], menuItem[1]);//замена мест элементов

menuItemLi.classList.add("menu-item");      //добавление 5 элемента                    
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi); 


let yourOpinion = prompt("Ваше отношение к технике Apple?");   // задание вопроса
promptforApple.textContent = yourOpinion;
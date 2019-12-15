/*
1) Получить значения с текстовых инпутов
2) Обработать полученные данные Приведя их к правилам Русского языка
3) Сгенерировать котоламповую историю из текста ниже заменяя UserName, UserFood, UserParts, UserAge на полученные данные

Однажды UserName захотел покушать. Но на беду, все, что он мог съесть, это UserFood.
Вдобавок, после последнего приёма пищи ему было очень больно, когда его дёргали за UserParts.
Шутка ли! Ведь ему уже UserAge!
*/

let parts = ['Усы','Рот','Хвост']; // массив частей тела
let foods = ['Котлетки','Сосисочки','Пюрешка']; // массив еды
let btn = document.getElementById("generate");
let radioParts = document.querySelectorAll("#partsList input");
let radioFoods = document.querySelectorAll("#foodsList input");

btn.addEventListener('click',function(){
	console.log(document.getElementById('name').value);
	console.log(document.getElementById('age').value);
	console.log(radioParts);
	console.log(radioFoods);
	let part, food;
	// Так делать не надо
	for(let i = 0; i < radioParts.length; i++){
		if (radioParts[i].checked === true) {
			part = radioParts[i].value;
			break;
		}
	}
	for(let i = 0; i < radioFoods.length; i++){
		if (radioFoods[i].checked === true) {
			food = radioFoods[i].value;
			break;
		}
	}
	console.log(parts[part]);
	console.log(foods[food]);
});



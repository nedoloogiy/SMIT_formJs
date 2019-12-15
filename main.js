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
let p = document.createElement('p');


btn.addEventListener('click',function(){
	let part, food, name, age;
	name = document.getElementById("name").value;
	age = document.getElementById("age").value;
	part = getValueRadio(radioParts);
	food = getValueRadio(radioFoods);
	p.innerText = generate(name, age, part,food);
	document.getElementById("history").append(p);
});

function getValueRadio(selector){
	for(let i = 0; i < selector.length; i++){
		if (selector[i].checked === true){
			return selector[i].value;
		}
	}
}

function generate(names,age,part,food){
let text = `Однажды ${names} захотел покушать. Но на беду, все, что он мог съесть, это ${foods[food]}.
Вдобавок, после последнего приёма пищи ему было очень больно, когда его дёргали за ${parts[part]}.
Шутка ли! Ведь ему уже ${age}`;
console.log(text);
return text;
}

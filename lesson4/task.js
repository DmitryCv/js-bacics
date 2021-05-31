/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
*/
function convert_num(number){
	let obj_num = {}
	if (number <= 999){
		obj_num['сотни'] = parseInt(number / 100);
		obj_num['десятки'] = parseInt((number - obj_num['сотни'] * 100) / 10);
		obj_num['единицы'] = number - (obj_num['сотни'] * 100 + obj_num['десятки'] * 10);
	}
	else console.log('Число превышает 999.');
	return obj_num;
}

console.log(convert_num(9187));

/*
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
function Phone(model, price){
	this.model = model;
	this.price = price;
}

function countBasketPrice(bucket){
	let sum = 0;
	for (let phone of bucket) {
		 sum += phone.price;
	}
	return sum;
}

iphone = new Phone('iPhone 12', 1200);
galaxy = new Phone('Galaxy 9', 1000);
nokia = new Phone('Nokia 5310', 100);


let basket = [iphone, galaxy, nokia];

let total = countBasketPrice(basket);
console.log(total);

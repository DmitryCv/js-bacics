const b = document.querySelector('#bucket');
const  listOfGoods = document.createElement('ol');
const t = document.createElement('h4');

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
numOfGoods = basket.length;
let total = countBasketPrice(basket);
b.appendChild(listOfGoods);

for (let i of basket){
	const newEl = document.createElement('li');
	newEl.textContent = 'Товар ' + i.model + ' цена ' + i.price;
	listOfGoods.appendChild(newEl);
}

if (numOfGoods === 0) {
	t.textContent = 'Корзина пуста';
}
else {
	t.textContent = 'В корзине ' + numOfGoods + ' ед. товаров на сумму ' + total + ' рублей';
}
b.appendChild(t);
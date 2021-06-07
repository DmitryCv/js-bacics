const b = document.querySelector('#bucket');
const  listOfGoods = document.querySelector('#goods');
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
function eventHandler(e){

}
function listGoods(goods) {

	b.appendChild(listOfGoods);

	for (let i of goods) {
		const newEl = document.createElement('div');
		newEl.setAttribute('id', 'phone');

		newEl.textContent = 'Товар ' + i.model + ' цена ' + i.price;
		const btn = document.createElement('button');
		btn.dataset.name = i.model;
		btn.dataset.price = i.price;
		btn.textContent = ' Купить';
		listOfGoods.appendChild(newEl);
		newEl.appendChild(btn);
	}
}

function drawBucket(basket) {
	numOfGoods = basket.length;
	let total = countBasketPrice(basket);

	if (numOfGoods === 0) {
	t.textContent = 'Корзина пуста';
	}
	else {
		t.textContent = 'В корзине ' + numOfGoods + ' ед. товаров на сумму ' + total + ' рублей';
	}
	b.appendChild(t);
}

const $goods = document.querySelector('#goods');

$goods.addEventListener('click', function(e) {
	// i = 'phone' + String(Date.now());
    if(e.target.tagName === 'BUTTON') {
        basket.push(new Phone(e.target.dataset.name, Number(e.target.dataset.price)));
    }
   	drawBucket(basket);
})

iphone = new Phone('iPhone 12', 1200);
galaxy = new Phone('Galaxy 9', 1000);
nokia = new Phone('Nokia 5310', 100);

let goods = [iphone, galaxy, nokia];
let basket = [];

listGoods(goods);
drawBucket(basket);


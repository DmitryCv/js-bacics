const b = document.querySelector('#bucket');
const listOfGoods = document.querySelector('#goods');
const showBucket = document.querySelector('#bucket');
const closeBucket = document.querySelector('#closeBucket')
const popup = document.querySelector('#popup')
const t = document.createElement('h4');

function showPopup() {
    popup.style.display = 'block';
}

function closePopup(e) {
    if(e.type === 'click' || e.key === 'Escape') {
        popup.style.display = 'none';
    }
}

closeBucket.addEventListener('click', closePopup);
document.addEventListener('keydown', closePopup);

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

function listGoods(goods) {

	document.body.appendChild(listOfGoods);

	for (let i of goods) {
		const newEl = document.createElement('div');
		newEl.setAttribute('id', 'phone');

		newEl.textContent = 'Товар ' + i.model + ' цена ' + i.price;
		const btn = document.createElement('button');
		btn.dataset.id = 'buy-item';
		btn.dataset.name = i.model;
		btn.dataset.price = i.price;
		btn.textContent = ' Купить';
		listOfGoods.appendChild(newEl);
		newEl.appendChild(btn);
	}
}

function drawGoodsInBucket(items) {
	const ol = popup.querySelector('ol');
	if (ol)	popup.removeChild(ol);
	const bucketList = document.createElement('ol');
	let id = 0;
	for (let i of items) {
		const newEl = document.createElement('li');
		newEl.setAttribute('id', 'phone');
		newEl.dataset = id;
		newEl.textContent = 'Товар ' + i.model + ' цена ' + i.price;
		const btn = document.createElement('button');
		btn.dataset.id = id;
		btn.dataset.name = i.model;
		btn.dataset.price = i.price;
		btn.textContent = ' Удалить';
		newEl.appendChild(btn);
		bucketList.appendChild(newEl);
		id++;

	}
	popup.appendChild(bucketList);
}

function drawBucket(basket) {
	numOfGoods = basket.length;
	let total = countBasketPrice(basket);

	if (numOfGoods === 0) {
	t.textContent = 'Корзина пуста';
	}
	else {
		t.textContent = 'В корзине ' + numOfGoods + ' ед. товара на сумму ' + total + ' рублей';
	}
	b.appendChild(t);
}

const $goods = document.querySelector('#goods');

$goods.addEventListener('click', function(e) {
    if(e.target.dataset.id == 'buy-item') {
        basket.push(new Phone(e.target.dataset.name, Number(e.target.dataset.price)));
    }
   	drawBucket(basket);
})

popup.addEventListener('click', function (e) {
	basket.splice(Number(e.target.dataset.id), 1);
	drawGoodsInBucket(basket);
	drawBucket(basket);
})

showBucket.addEventListener('click', function (e) {
	if (e.target.id === 'bucket'){
		console.log(e.target.id);
		showPopup();
		drawGoodsInBucket(basket);
	}
});

iphone = new Phone('iPhone 12', 1200);
galaxy = new Phone('Galaxy 9', 1000);
nokia = new Phone('Nokia 5310', 100);

let goods = [iphone, galaxy, nokia];
let basket = [];

listGoods(goods);
drawBucket(basket);


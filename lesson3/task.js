/*
 С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
function isPrime(num){
	let i = 2;
	if (num == 2) return true;
	while (i <= num / 2){
		if (num % i == 0) return false;
		i += 1;
	}
	return true;
}

let n = 2;
while (n <= 100){
	if (isPrime(n))	console.log(n);
	n += 1;
}

/*
Товары в корзине хранятся в массиве. Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let goods_price = [4, 2, 6, 3, 8];

function countBasketPrice(prices){
	let sum = 0;
	for (let num of prices) {
		 sum += num;
	}
	return sum;
}

total = countBasketPrice(goods_price);
console.log(total);

/*
Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
*/
for (i = 0; i < 10; console.log(i++)){}

/*
Нарисовать пирамиду с 20 рядами с помощью console.log
*/
let counter = 20;
for (i = 1; i <= counter; i++){
	console.log('*'.repeat(i));
}

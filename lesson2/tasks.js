/*
1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксная форма инкрементирования, сначала увеличивается на 1 потом выводится результат
d = b++; alert(d);           // 1 постфиксная форма инкрементирования, сначала выводится результат, потом увеличивается на 1
c = (2+ ++a); alert(c);      // 5 переменная а увеличивается на 1, затем прибавляется 2 в выводится результат
d = (2+ b++); alert(d);      // 4 к переменной b прибавляется 2 и выводится результат, а затем переменная b увеличивается на 1
alert(a);                    // 3 выводится значение переменной а (после 2-х инкрементирований)
alert(b);                    // 3 выводится значение переменной b (после 2-х инкрементирований)

Почему код даёт именно такие результаты?
*/

/*
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
Значение переменной а удвоится и к полученному результатн прибавляется 1.
х будет равен 5.
*/

/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
*/
let a = 4;
let b = 2;

if (a > 0 && b > 0) 
	console.log(a - b);
else if (a < 0 && b < 0)
	console.log(a * b);
else
	console.log(a + b);

/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15
*/
let a = 9;

switch(a){
	case(1):console.log(1);
	case(2):console.log(2);
	case(3):console.log(3);
	case(4):console.log(4);
	case(5):console.log(5);
	case(6):console.log(6);
	case(7):console.log(7);
	case(8):console.log(8);
	case(9):console.log(9);
	case(10):console.log(10);
	case(11):console.log(11);
	case(12):console.log(12);
	case(13):console.log(13);
	case(14):console.log(14);
	case(15):console.log(15);
}

/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/
function sum(a, b){
	return a + b;
}

function mult(a, b) {
	return a * b;
}

function sub(a, b){
	return a - b;
}

function div(a, b){
	return a / b;
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3)
и вернуть полученное значение (использовать switch)
*/
function mathOperation(arg1, arg2, operation){
	switch(operation){
		case('sum'): 
			console.log(sum(arg1, arg2));
			break;
		case('mult'):
			console.log(mult(arg1, arg2));
			break;
		case('sub'):
			console.log(sub(arg1, arg2));
			break;
		case('div'): 
			console.log(div(arg1, arg2));
			break;
		default: 
			console.log('Uknown operation');
			break;
	}
}

mathOperation(3, 2, 'sub');

/*
7. *Сравнить null и 0. Попробуйте объяснить результат. 
*/
null === 0 // False

// Данные объекты являются разными типами данных
typeof null // is object
typeof 0 // is number

/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), 
где val – заданное число, pow – степень.
*/
function power(val, pow){
	if (pow == 0) return 1;
	else return val * power(val, pow - 1);
}

power(2, 3);

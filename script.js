'use strict';

function quadEquation(){
	let parta = prompt("Введите первый коэффициент:");
	let partb = prompt("Введите второй коэффициент с его знаком:");
	let partc = prompt("Введите свободный член с его знаком:");

	let d = (partb ** 2) - (4 * parta * partc);



	let x1 = (-partb + Math.sqrt(d)) / 2 * parta;
	let x2 = (-partb - Math.sqrt(d)) / 2 * parta;

	 if (d < 0) {
		document.write("Пустое множество, нет корней!");
	} else{
		document.write("Ваши корни: x1 = " + x1 + ", и x2 = " + x2);
	}
}

quadEquation();
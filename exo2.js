const scanf = require('scanf')

console.log(`Veuillez saisir un nombre sup ou egal à 1

	:`)

let value = scanf('%d')

let res = 0
for(let step = 1; step<=value ; step++)
{
	
	res += step

}

console.log(res)
const scanf = require('scanf')

console.log(`Veuillez saisir cinq nombres

	:`)

let res = 0
var tab = new Array();

for(let step = 0; step<5 ; step++)
{
	
	tan[step] = scanf('%d')

}

let max = tab[0]

tab.forEach(function(item, index, array) {
	res += item;
	if (item > max)
	{
		max = item;
	}
})

console.log(`Le plus grand element est ${max}`)
console.log(`La moyenne est de ${res/tab.length}`)


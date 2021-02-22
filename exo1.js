const scanf = require('scanf')

console.log(`Veuillez saisir deux chaines de caractères

	Première chaine`)

let first = scanf('%s')

console.log(`Deuxième chaine`)

let second = scanf('%s')

if (first.length == 2 * second.length)
{
	console.log(`1er chaine ${first}  : ${first.length}`)
	console.log(`2e  chaine ${second} : ${second.length}`)
	console.log(`${first} est deux fois plus long que ${second}`)
}else{
	console.log(`Aucune opération`)
}
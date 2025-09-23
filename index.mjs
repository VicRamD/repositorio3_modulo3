import {leerSuperheroes, agregarSuperheroes} from './utils.mjs';

const archivoOrginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

//Agregar nuevos superhéroes
agregarSuperheroes(archivoOrginal, archivoNuevos);

/*Leer y mostrar la lista de superheroes ordenada
const superheroes = leerSuperheroes('./superheroes.txt');*/

//Leer y mostrar la lista actualizada de superhéroes ordenada
const superheroes = leerSuperheroes(archivoOrginal);
console.log("Superhéroes ordenados");
console.log(superheroes);

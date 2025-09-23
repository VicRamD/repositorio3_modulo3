import fs from 'fs';

//Clase para representar un super héroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial,
         aliado, enemigo){
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

//Función para leer y ordenar los superhéroes
export const leerSuperheroes = ruta => {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    //Convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
            hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado,
            hero.enemigo
    ));
    
    //Ordenar por nombre de superheroes
    superheroes.sort((a,b)=>a.nombreSuperheroe.localeCompare(b.nombreSuperheroe));
    return superheroes;
};

//Nueva función para agregar superhéroes
export const agregarSuperheroes = (rutaOriginal,rutaNuevos) => {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    const listaMezclada = [...superheroesOriginales, ...nuevosSuperheroes];
    console.log(listaMezclada);

    //convertir todos los superhéroes a instancias de superheroes
    const instanciasTodos = listaMezclada.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
            hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado,
            hero.enemigo
    ));

    fs.writeFileSync(rutaOriginal, JSON.stringify(instanciasTodos, null, 2),'utf8');
    console.log("Lista de superhéroes actualizada con éxito");

    /*
    const instanciaHeoresOriginales = superheroesOriginales.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
            hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado,
            hero.enemigo
    )        
    );

    //convertir los nuevos superhéroes a instancias de superheroes
    const instanciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,
            hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado,
            hero.enemigo
    ));

    //Combinar listas
    const listaActualizada = [...datosOriginales, ...instanciasNuevos];
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2),'utf8');
    console.log("Lista de superhéroes actualizada con éxito"); */
};


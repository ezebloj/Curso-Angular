// El servicio me sirve para centralizar la información en todos los componentes y mantener la coherencia entre ellos

import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";

@Injectable({
  providedIn: "root",
})
export class PeliculaService {
  peliculas: Pelicula[] = [];

  //el constructor es lo primero que se ejecuta cuando se instancia una clase
  //en este caso, al ejecutarse el constructor llama a la función init película
  constructor() {
    this.initPeliculas();
  }

  //función que inicializa el arreglo de películas con algunas películas de prueba (simulando la carga desde un servidor)
  initPeliculas() {
    const pelicula1 = new Pelicula("Titanic", "Drama", "link");
    const pelicula2 = new Pelicula("Spiderman", "Ficcion", "link2");
    const pelicula3 = new Pelicula("El Padrino", "Drama", "link3");
    this.peliculas = [pelicula1, pelicula2, pelicula3];
  }

  //devuelve todas las películas almacenadas
  getAllPeliculas() {
    return this.peliculas;
  }

  //guarda una película en base al nombre, género y link
  setPelicula(nombre: string, genero: string, link: string) {
    const pelicula = new Pelicula(nombre, genero, link);
    this.peliculas.push(pelicula);
    return this.peliculas;
  }
}

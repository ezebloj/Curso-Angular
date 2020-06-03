import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";

@Injectable({
  providedIn: "root",
})
export class PeliculaService {
  peliculas: Pelicula[] = [];

  //arreglo para identificar si se marca o no la película
  //el arregloMarcado[0] identifica el estado del botón correspondiente a la película de arregloPelicula[0]
  arregloMarcado: boolean[] = [];

  constructor() {
    this.initPeliculas();
    this.initArregloMarcado();
  }

  initPeliculas() {
    const pelicula1 = new Pelicula("Titanic", "Drama", "link");
    const pelicula2 = new Pelicula("Spiderman", "Ficcion", "link2");
    const pelicula3 = new Pelicula("El Padrino", "Drama", "link3");
    this.peliculas = [pelicula1, pelicula2, pelicula3];
  }

  initArregloMarcado() {
    for (let index = 0; index < this.peliculas.length; index++) {
      //inicializa todo el arreglo del marcado en falso
      this.arregloMarcado[index] = false;
    }
  }

  getAllPeliculas() {
    return this.peliculas;
  }

  setPelicula(nombre: string, genero: string, link: string) {
    const pelicula = new Pelicula(nombre, genero, link);
    this.peliculas.push(pelicula);
    //cada vez que se agrega una película, agrego un nuevo booleano a mi arreglo de marcado
    this.arregloMarcado.push(false);
    return this.peliculas;
  }
}

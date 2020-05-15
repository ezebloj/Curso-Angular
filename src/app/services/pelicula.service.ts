import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";

@Injectable({
  providedIn: "root",
})
export class PeliculaService {
  peliculas: Pelicula[] = [];

  constructor() {
    this.initPeliculas();
  }

  initPeliculas() {
    const pelicula1 = new Pelicula("Titanic", "Drama", "link");
    const pelicula2 = new Pelicula("Spiderman", "Ficcion", "link2");
    const pelicula3 = new Pelicula("El Padrino", "Drama", "link3");
    this.peliculas = [pelicula1, pelicula2, pelicula3];
  }

  getAllPeliculas() {
    return this.peliculas;
  }

  setPelicula(nombre: string, genero: string, link: string) {
    const pelicula = new Pelicula(nombre, genero, link);
    this.peliculas.push(pelicula);
    return this.peliculas;
  }
}

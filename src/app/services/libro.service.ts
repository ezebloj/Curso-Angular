import { Injectable } from "@angular/core";
import { Libro } from "../models/libro.models";

@Injectable({
  providedIn: "root",
})
export class LibroService {
  libros: Libro[] = [];

  constructor() {}

  getAllLibros() {
    return this.libros;
  }

  //guarda una película en base al nombre, género y link
  setLibro(nombre: string, genero: string, link: string) {
    const libro = new Libro(nombre, genero, link);
    this.libros.push(libro);
    return this.libros;
  }
}

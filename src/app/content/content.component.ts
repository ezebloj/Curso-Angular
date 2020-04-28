import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  nombre: string = "";
  genero: string = "";
  link: string = "";
  arregloPeliculas: Pelicula[] = [];

  constructor() {}

  ngOnInit() {}

  guardar() {
    // console.log(
    //   "Nombre " + this.nombre + " Género " + this.genero + " Link " + this.link
    // );

    const pelicula = new Pelicula(this.nombre, this.genero, this.link);
    this.arregloPeliculas.push(pelicula);
    this.resetFormulario();
  }

  resetFormulario() {
    this.nombre = "";
    this.genero = "";
    this.link = "";
  }
}

import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";
import { PeliculaService } from "../services/pelicula.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  nombre: string = "";
  genero: string = "";
  link: string = "";

  constructor(private peliculasService: PeliculaService) {}

  ngOnInit() {}

  //guardamos una películas en el servicio
  guardar() {
    this.peliculasService.setPelicula(this.nombre, this.genero, this.link);
    this.resetFormulario();
  }

  resetFormulario() {
    this.nombre = "";
    this.genero = "";
    this.link = "";
  }
}

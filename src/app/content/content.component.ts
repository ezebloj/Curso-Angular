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
  arregloPeliculas: Pelicula[] = [];
  tituloCard: string = "";
  marcado: boolean = false;

  constructor(private peliculasService: PeliculaService) {}

  ngOnInit() {
    this.arregloPeliculas = this.peliculasService.getAllPeliculas();
  }

  guardar() {
    // console.log(
    //   "Nombre " + this.nombre + " Género " + this.genero + " Link " + this.link
    // );
    this.arregloPeliculas = this.peliculasService.setPelicula(
      this.nombre,
      this.genero,
      this.link
    );
    this.resetFormulario();
  }

  resetFormulario() {
    this.nombre = "";
    this.genero = "";
    this.link = "";
  }

  peliMarcado(event: any) {
    console.log(event);
    this.tituloCard = event.titulo;
    this.marcado = event.marcado;
    setTimeout(() => {
      this.tituloCard = "";
    }, 3000);
  }
}

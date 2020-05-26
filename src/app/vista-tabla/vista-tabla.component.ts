import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";
import { PeliculaService } from "../services/pelicula.service";

@Component({
  selector: "app-vista-tabla",
  templateUrl: "./vista-tabla.component.html",
  styleUrls: ["./vista-tabla.component.css"],
})
export class VistaTablaComponent implements OnInit {
  //no se utiliza input porque accedemos a los datos a través del servicio

  arregloPeliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculaService) {}

  ngOnInit() {
    this.arregloPeliculas = this.peliculasService.getAllPeliculas();
  }
}

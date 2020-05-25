import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";
import { PeliculaService } from "../services/pelicula.service";

@Component({
  selector: "app-vista-tarjeta",
  templateUrl: "./vista-tarjeta.component.html",
  styleUrls: ["./vista-tarjeta.component.css"],
})
export class VistaTarjetaComponent implements OnInit {
  arregloPeliculas: Pelicula[] = [];
  tituloCard: string = "";
  marcado: boolean = false;

  constructor(private peliculasService: PeliculaService) {}

  //función que es lo primero que se ejecuta cuando se crea el componente
  //implicitamente sería como que esté dentro de la llave del contructor (ver constructor de pelicula.service)
  ngOnInit() {
    this.arregloPeliculas = this.peliculasService.getAllPeliculas();
  }

  peliMarcado(event: any) {
    //muestra algo en la consola del navegador, no es necesaria esta línea para que se ejecute la función (debug)
    console.log(event);
    this.tituloCard = event.titulo;
    this.marcado = event.marcado;
    setTimeout(() => {
      this.tituloCard = "";
    }, 3000);
  }
}

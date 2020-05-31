import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() arregloPeliculas: Pelicula[] = [];

  //EventEmitter --> emite algo
  @Output() leido = new EventEmitter<any>();

  //variable para identificar si se marca o no el título
  marcado: boolean = false;
  //nombreBoton: string = "Marcar";

  //objeto para pasar información adicional sobre el evento
  mensajeEvento: any = {
    nombre: "",
    marcado: false,
  };

  constructor() {}

  ngOnInit() {}

  marcar(arregloPeliculas) {
    //cambia el estado marcado
    this.marcado = !this.marcado;
    //armo el objeto para pasar la info en el evento
    this.mensajeEvento.nombre = arregloPeliculas.titulo;
    this.mensajeEvento.marcado = this.marcado;
    //emito el evento
    this.leido.emit(this.mensajeEvento);
    // if (this.marcado == false) {
    //   this.nombreBoton = "Marcar";
    // } else {
    //   this.nombreBoton = "Desmarcar";
    // }
  }
}

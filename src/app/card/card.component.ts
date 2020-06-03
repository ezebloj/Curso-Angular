import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() arregloPeliculas: Pelicula[] = [];
  @Input() arregloMarcado: boolean[] = [];

  //EventEmitter --> emite algo
  @Output() leido = new EventEmitter<any>();

  //objeto para pasar información adicional sobre el evento
  mensajeEvento: any = {
    titulo: "",
    marcado: false,
  };

  constructor() {}
  //se ejecuta cuando se construye el componente
  ngOnInit() {}

  marcar(pelicula: Pelicula, index: number) {
    //cambia el estado marcado
    this.arregloMarcado[index] = !this.arregloMarcado[index];
    //armo el objeto para pasar la info en el evento
    this.mensajeEvento.titulo = pelicula.nombre;
    this.mensajeEvento.marcado = this.arregloMarcado[index];
    //emito el evento
    this.leido.emit(this.mensajeEvento);
    // if (this.marcado == false) {
    //   this.nombreBoton = "Marcar";
    // } else {
    //   this.nombreBoton = "Desmarcar";
    // }
  }
}

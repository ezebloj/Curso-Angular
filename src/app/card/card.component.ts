import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() creado: Date;
  @Input() titulo: string = "";
  @Input() subtitulo: string = "";
  @Input() link: string = "";

  @Output() leido = new EventEmitter<any>();

  //variable para identificar si se marca o no el título
  marcado: boolean = false;
  //nombreBoton: string = "Marcar";

  mensajeEvento: any = {
    titulo: "",
    marcado: false,
  };

  constructor() {}

  ngOnInit() {}

  marcar() {
    this.marcado = !this.marcado;
    this.mensajeEvento.titulo = this.titulo;
    this.mensajeEvento.marcado = this.marcado;
    this.leido.emit(this.mensajeEvento);
    // if (this.marcado == false) {
    //   this.nombreBoton = "Marcar";
    // } else {
    //   this.nombreBoton = "Desmarcar";
    // }
  }
}

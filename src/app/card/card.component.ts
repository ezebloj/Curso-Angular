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

  //EventEmitter --> emite algo
  @Output() leido = new EventEmitter<any>();

  //variable para identificar si se marca o no el título
  marcado: boolean = false;
  //nombreBoton: string = "Marcar";

  //objeto para pasar información adicional sobre el evento
  mensajeEvento: any = {
    titulo: "",
    marcado: false,
  };

  constructor() {}

  ngOnInit() {}

  marcar() {
    //cambia el estado marcado
    this.marcado = !this.marcado;
    //armo el objeto para pasar la info en el evento
    this.mensajeEvento.titulo = this.titulo;
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

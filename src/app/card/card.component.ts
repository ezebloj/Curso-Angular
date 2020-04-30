import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() subtitulo: string = "";
  @Input() link: string = "";

  //variable para identificar si se marca o no el título
  marcado: boolean = false;
  nombreBoton: string = "Marcar";

  constructor() {}

  ngOnInit() {}

  marcar() {
    this.marcado = !this.marcado;
    // if (this.marcado == false) {
    //   this.nombreBoton = "Marcar";
    // } else {
    //   this.nombreBoton = "Desmarcar";
    // }
  }
}

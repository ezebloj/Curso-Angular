import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  nombre: string = "";
  genero: string = "";
  link: string = "";

  constructor() {}

  ngOnInit() {}

  guardar() {
    // console.log(
    //   "Nombre " + this.nombre + " Género " + this.genero + " Link " + this.link
    // );
  }
}

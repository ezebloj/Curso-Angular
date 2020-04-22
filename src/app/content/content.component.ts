import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  title: string = "curso-angular";
  alumno: any = {
    id: 123,
    name: "Juan Pérez",
    mail: "juan@gmail.com",
    avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
    prom_gral: 8.5,
    carrera: "Ingeniería",
    condicion: "Regular",
    url: "https://github.com/ezebloj",
    materias_en_curso: ["Cálculo I", " Física I", " Álgebra"],
  };
  modificarNombre() {
    this.alumno.name = "Ezequiel";
  }

  constructor() {}

  ngOnInit() {}
}

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
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
}

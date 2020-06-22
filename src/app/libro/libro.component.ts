import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-libro",
  templateUrl: "./libro.component.html",
  styleUrls: ["./libro.component.css"],
})
export class LibroComponent implements OnInit {
  generos = ["Acción", "Aventuras", "Cs. ficción", "Drama", "Infantil"];

  // objeto para llevar el formulario
  libroForm: FormGroup;

  // objeto que representa un libro
  libro: any;

  // el FormBuilder es una clase de Angular que sirve para construir formularios
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // inicializamos nuestra variable utilizando el método Gruop del FormBuilder que me permite darle forma a mi formulario
    this.libroForm = this.fb.group({
      nombre: "",
      genero: "",
      link: "",
    });
  }
}

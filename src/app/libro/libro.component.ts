import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
      nombre: ["", Validators.required],
      genero: ["", Validators.required],
      link: ["", Validators.required],
    });
  }

  // ------------------------------------------------------------------------------------------------------------------------

  // Función que se dispara cuando se toca el botón Agregar
  // Almacena en la variable local "libro" (del componente) los valores del formulario
  onSubmit() {
    this.libro = this.saveLibro();
  }

  // ------------------------------------------------------------------------------------------------------------------------

  saveLibro() {
    // Creamos un objeto para almacenar los valores del formulario
    // La función get del formGroup me devuelve el control correspondiente y utilizo esto para guardar el valor que tenía ese Control
    const libro = {
      nombre: this.libroForm.get("nombre").value,
      genero: this.libroForm.get("genero").value,
      link: this.libroForm.get("link").value,
    };

    // retorna el objeto creado previamente
    return libro;
  }
}

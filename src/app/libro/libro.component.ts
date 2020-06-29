import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LibroService } from "../services/libro.service";

@Component({
  selector: "app-libro",
  templateUrl: "./libro.component.html",
  styleUrls: ["./libro.component.css"],
})
export class LibroComponent implements OnInit {
  generos = ["Acción", "Aventuras", "Cs. ficción", "Drama", "Infantil"];

  arregloLibros: any[] = [];

  // objeto para llevar el formulario
  libroForm: FormGroup;

  // objeto que representa un libro
  libro: any;

  // el FormBuilder es una clase de Angular que sirve para construir formularios
  constructor(private fb: FormBuilder, private librosService: LibroService) {}

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
    this.arregloLibros = this.librosService.setLibro(
      this.libro.nombre,
      this.libro.genero,
      this.libro.link
    );
    this.libroForm.reset();
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
    //this.arregloLibros.push(libro);
    // retorna el objeto creado previamente
    return libro;
  }
}

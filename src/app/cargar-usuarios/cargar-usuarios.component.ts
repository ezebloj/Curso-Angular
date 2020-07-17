import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UsuarioService } from "../services/usuario.service";

@Component({
  selector: "app-cargar-usuarios",
  templateUrl: "./cargar-usuarios.component.html",
  styleUrls: ["./cargar-usuarios.component.css"],
})
export class CargarUsuariosComponent implements OnInit {
  arregloLibros: any[] = [];

  libroForm: FormGroup;

  libro: any;

  constructor(private fb: FormBuilder, private librosService: UsuarioService) {}

  ngOnInit() {
    this.libroForm = this.fb.group({
      nombre: [""],
      genero: [""],
      link: [""],
    });
  }

  // ------------------------------------------------------------------------------------------------------------------------

  onSubmit() {
    this.libro = this.saveLibro();
    // this.arregloLibros = this.librosService.setUsuario(
    //   this.libro.nombre,
    //   this.libro.genero,
    //   this.libro.link
    // );
    this.libroForm.reset();
  }

  // ------------------------------------------------------------------------------------------------------------------------

  saveLibro() {
    const libro = {
      nombre: this.libroForm.get("nombre").value,
      genero: this.libroForm.get("genero").value,
      link: this.libroForm.get("link").value,
    };
    return libro;
  }
}

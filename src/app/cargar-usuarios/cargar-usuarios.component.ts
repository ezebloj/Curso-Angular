import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UsuarioService } from "../services/usuario.service";
import { IUsuario, IRtaGetServidor } from "../models/usuario.models";

@Component({
  selector: "app-cargar-usuarios",
  templateUrl: "./cargar-usuarios.component.html",
  styleUrls: ["./cargar-usuarios.component.css"],
})
export class CargarUsuariosComponent implements OnInit {
  arregloLibros: IUsuario[] = [];

  usuarioForm: FormGroup;

  usuario: IUsuario;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombre: [""],
      apellido: [""],
      genero: [""],
      nacimiento: [""],
      email: [""],
      telefono: [""],
      website: [""],
      direccion: [""],
      status: [""],
    });
  }

  // ------------------------------------------------------------------------------------------------------------------------

  onSubmit() {
    this.usuario = this.saveUsuario();
    this.usuarioService.setUsuario(this.usuario).subscribe();
    this.usuarioForm.reset();
  }

  // ------------------------------------------------------------------------------------------------------------------------

  saveUsuario() {
    const usuario = {
      nombre: this.usuarioForm.get("nombre").value,
      apellido: this.usuarioForm.get("apellido").value,
      genero: this.usuarioForm.get("genero").value,
      nacimiento: this.usuarioForm.get("nacimiento").value,
      email: this.usuarioForm.get("email").value,
      telefono: this.usuarioForm.get("telefono").value,
      website: this.usuarioForm.get("website").value,
      direccion: this.usuarioForm.get("direccion").value,
      status: this.usuarioForm.get("status").value,
    };
    return usuario;
  }
}

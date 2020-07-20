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

  rtaServidor: any;

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
    });
  }

  // ------------------------------------------------------------------------------------------------------------------------

  onSubmit() {
    this.usuario = this.saveUsuario();
    this.usuarioService
      .setUsuario(this.usuario)
      .subscribe((rta_servidor: any) => {
        this.rtaServidor = rta_servidor;
      });
    this.usuarioForm.reset();
  }

  // ------------------------------------------------------------------------------------------------------------------------

  saveUsuario() {
    const usuario = {
      first_name: this.usuarioForm.get("nombre").value,
      last_name: this.usuarioForm.get("apellido").value,
      gender: this.usuarioForm.get("genero").value,
      dob: this.usuarioForm.get("nacimiento").value,
      email: this.usuarioForm.get("email").value,
      phone: this.usuarioForm.get("telefono").value,
      website: this.usuarioForm.get("website").value,
      address: this.usuarioForm.get("direccion").value,
    };
    return usuario;
  }
}

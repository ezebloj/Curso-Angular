import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IUsuario, IRtaGetUsuarioServidor } from "../models/usuario.models";
import { UsuarioService } from "../services/usuario.service";

@Component({
  selector: "app-actualizar-usuario",
  templateUrl: "./actualizar-usuario.component.html",
  styleUrls: ["./actualizar-usuario.component.css"],
})
export class ActualizarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  usuario: IUsuario;

  rtaServidor: IRtaGetUsuarioServidor;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      genero: ["", Validators.required],
      nacimiento: [""],
      email: ["", Validators.required],
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
      .subscribe((rta_servidor: IRtaGetUsuarioServidor) => {
        this.rtaServidor = rta_servidor;
        if (this.rtaServidor._meta.success) {
          this.usuarioForm.reset();
        }
      });
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

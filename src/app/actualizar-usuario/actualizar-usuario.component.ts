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

  // la idea es iniciar el html y aparezcan ya cargados en el formaulario los datos del usuario que se quieren editar
  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombre: [this.usuarioService.usuario.first_name, Validators.required],
      apellido: [this.usuarioService.usuario.last_name, Validators.required],
      genero: [this.usuarioService.usuario.gender, Validators.required],
      nacimiento: [this.usuarioService.usuario.dob],
      email: [this.usuarioService.usuario.email, Validators.required],
      telefono: [this.usuarioService.usuario.phone],
      website: [this.usuarioService.usuario.website],
      direccion: [this.usuarioService.usuario.address],
    });
  }

  // ------------------------------------------------------------------------------------------------------------------------

  // la idea es en vez de guardar (Set) los usuarios como en el ts de cargar-usuarios, actualizarlos a través del Update
  onSubmit() {
    this.usuario = this.saveUsuario();
    this.usuarioService
      .updateUsuario(this.usuario, this.usuarioService.usuario.id)
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

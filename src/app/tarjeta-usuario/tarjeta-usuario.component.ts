import { Component, OnInit } from "@angular/core";
import { IUsuario, IRtaGetServidor } from "../models/usuario.models";
import { UsuarioService } from "../services/usuario.service";

@Component({
  selector: "app-tarjeta-usuario",
  templateUrl: "./tarjeta-usuario.component.html",
  styleUrls: ["./tarjeta-usuario.component.css"],
})
export class TarjetaUsuarioComponent implements OnInit {
  // acá me voy a guardar todos los usuarios de la BD
  usuarios: IUsuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    // accedo a la función getAllUsuarios de mi servicio la cual me permite acceder a la respuesta del servidor
    this.usuarioService
      .getAllUsuarios()
      .subscribe((rta_servidor: IRtaGetServidor) => {
        // dentro de la respuesta del servidor está el arreglo de usuarios (.result) y ese arreglo lo guardo en mi arreglo local (de usuarios)
        this.usuarios = rta_servidor.result;
      });
  }
}

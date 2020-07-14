import { Component, OnInit } from "@angular/core";
import { IUsuario, IRtaGetServidor } from "../models/usuario.models";
import { UsuarioService } from "../services/usuario.service";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"],
})
export class UsuarioComponent implements OnInit {
  // acá me voy a guardar todos los usuarios de la BD
  usuarios: IUsuario[] = [];

  usuarioMarcado: IUsuario;

  modalAbierto = false;

  mostrarLoading: boolean;

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

  // abro o cierro el modal en base al valor del cambio
  // false (cierra) true (abre)
  abrir_cerrar_modal(cambio: boolean) {
    this.modalAbierto = cambio;
  }

  obtenerDetalles(id: number) {
    this.mostrarLoading = true;
    this.abrir_cerrar_modal(true);
    this.usuarioService.getUsuarioById(id).subscribe((rta_servidor: any) => {
      this.usuarioMarcado = rta_servidor.result;
      this.mostrarLoading = !this.mostrarLoading;
    });
  }
}

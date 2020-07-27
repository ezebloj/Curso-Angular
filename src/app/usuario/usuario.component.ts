import { Component, OnInit } from "@angular/core";
import {
  IUsuario,
  IRtaGetServidor,
  IRtaGetUsuarioServidor,
  IRtaDeleteServidor,
} from "../models/usuario.models";
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

  mostrarLoading = false;

  modalBorrarAbierto = false;

  idBorrarUsuario: number;

  borradoConfirmado: boolean;

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
    this.usuarioService
      .getUsuarioById(id)
      .subscribe((rta_servidor: IRtaGetUsuarioServidor) => {
        this.usuarioMarcado = rta_servidor.result;
        this.mostrarLoading = false;
      });
  }

  abrir_cerrar_modal_borrar(cambio: boolean) {
    this.modalBorrarAbierto = cambio;
  }

  // función que se ejecuta cuando se toca Borrar en el html y pide confirmar antes de borrar
  confirmar(id: number) {
    this.abrir_cerrar_modal_borrar(true);
    this.idBorrarUsuario = id;
  }

  // función que se ejecuta cuando se confirma la función anterior y borra el usuario
  borrarUsuario() {
    this.usuarioService
      .deleteUsuario(this.idBorrarUsuario)
      .subscribe((rta_servidor: IRtaDeleteServidor) => {
        this.borradoConfirmado = rta_servidor._meta.success;
        if (this.borradoConfirmado) {
          this.borrarElementoArray(this.idBorrarUsuario);
        }
      });
    this.abrir_cerrar_modal_borrar(false);
  }

  // función que se ejecuta cuando se toca Editar en el html y obtiene los datos según el ID del usuario a través del servicio
  // (similar a la función obtenerDetalles y luego manda los datos del usuario al servicio nuevamente a través de
  // la función setUsuarioEditar
  cargarDatos(id: number) {
    this.usuarioService
      .getUsuarioById(id)
      .subscribe((rta_servidor: IRtaGetUsuarioServidor) => {
        this.usuarioMarcado = rta_servidor.result;
        this.usuarioService.setUsuarioEditar(this.usuarioMarcado);
      });
  }

  borrarElementoArray(id: number) {
    // crea una variable para guardar el índice donde se encuentra el elemento que buscamos (el id es igual al id que estamos recibiendo de parámetro)
    // el 'user' es similar al let del ngFor (puede tener cualquier nombre de variable)
    // console.log("ID desde función borrarElementoArray: " + id);
    const index = this.usuarios.findIndex((user) => {
      return user.id == id;
    });
    // console.log("índice de la función de búsqueda: " + index);
    // si el índice es mayor que -1 es decir, lo encontró (porque si fuera -1 significa que no encontró ese elemento en el arreglo)
    if (index > -1) {
      this.usuarios.splice(index, 1);
    }
  }
}

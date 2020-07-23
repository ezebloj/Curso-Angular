import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUsuario } from "../models/usuario.models";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  // esta url es la ruta que me permite acceder a todos los usuarios (API)
  url = "https://gorest.co.in/public-api/users";

  // la librería HttpClient brinda todos los métodos para conectarme con el servidor (GET, POST, PUT, DELETE, etc.)
  constructor(private http: HttpClient) {
    // esto es solo de prueba, borrar después
    const nuevoUsuario = {
      first_name: "Ezequiel",
      last_name: "Gomez",
      gender: "male",
      email: "ezee4@eze.com",
    };
    // cuando llegue la respuesta va a mostrarlo en la consola
    this.updateUsuario(nuevoUsuario, 7626).subscribe(console.log);
  }

  //obtiene todos los usuarios
  getAllUsuarios() {
    // el header son datos que acompañan a la url
    const headers = new HttpHeaders({
      Authorization: "Bearer rFAmoCZEBz5tESyhrZFwaZo9eakV3DTym2xT",
    });
    // retorno un observable que es la respuesta del servidor y se produce cuando efectivamente el servidor nos pudo responder
    return this.http.get(this.url, { headers });
  }

  // obtiene un usuario por ID
  getUsuarioById(id: number) {
    const headers = new HttpHeaders({
      Authorization: "Bearer rFAmoCZEBz5tESyhrZFwaZo9eakV3DTym2xT",
    });
    const url = `https://gorest.co.in/public-api/users/${id}`;
    return this.http.get(url, { headers });
  }

  // guarda un usuario
  setUsuario(usuario: IUsuario) {
    const headers = new HttpHeaders({
      Authorization: "Bearer rFAmoCZEBz5tESyhrZFwaZo9eakV3DTym2xT",
    });
    return this.http.post(this.url, usuario, { headers });
  }

  // actualiza un usuario
  updateUsuario(usuario: IUsuario, id: number) {
    const headers = new HttpHeaders({
      Authorization: "Bearer rFAmoCZEBz5tESyhrZFwaZo9eakV3DTym2xT",
    });
    const url = `https://gorest.co.in/public-api/users/${id}`;
    return this.http.put(url, usuario, { headers });
  }

  // borra un usuario
  deleteUsuario(id: number) {
    const headers = new HttpHeaders({
      Authorization: "Bearer rFAmoCZEBz5tESyhrZFwaZo9eakV3DTym2xT",
    });
    const url = `https://gorest.co.in/public-api/users/${id}`;
    return this.http.delete(url, { headers });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  // esta url es la ruta que me permite acceder a todos los usuarios (API)
  url = "https://gorest.co.in/public-api/users";

  constructor(private http: HttpClient) {}

  getAllUsuarios() {
    // el header son datos que acompañan a la url
    const headers = new HttpHeaders({
      Authorization: "Bearer rFAmoCZEBz5tESyhrZFwaZo9eakV3DTym2xT",
    });
    // retorno un observable que es la respuesta del servidor y se produce cuando efectivamente el servidor nos pudo responder
    return this.http.get(this.url, { headers });
  }
}

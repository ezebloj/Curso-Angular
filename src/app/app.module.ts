import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
// el ReactiveFormsModule es para usar formularios reactivos
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardComponent } from "./card/card.component";
import { PeliculaService } from "./services/pelicula.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { VistaTablaComponent } from "./vista-tabla/vista-tabla.component";
import { VistaTarjetaComponent } from "./vista-tarjeta/vista-tarjeta.component";
import { LibroComponent } from "./libro/libro.component";
// importación para trabajar con el módulo http que nos sirve para conectarnos a una base de datos
import { HttpClientModule } from "@angular/common/http";
import { UsuarioComponent } from "./usuario/usuario.component";
import { TarjetaUsuarioComponent } from "./tarjeta-usuario/tarjeta-usuario.component";
import { PostComponent } from "./post/post.component";
import { CargarUsuariosComponent } from "./cargar-usuarios/cargar-usuarios.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CardComponent,
    NavbarComponent,
    VistaTablaComponent,
    VistaTarjetaComponent,
    LibroComponent,
    UsuarioComponent,
    TarjetaUsuarioComponent,
    PostComponent,
    CargarUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent],
})
export class AppModule {}

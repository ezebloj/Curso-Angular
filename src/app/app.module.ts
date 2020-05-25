import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "./card/card.component";
import { PeliculaService } from "./services/pelicula.service";
import { NavbarComponent } from './navbar/navbar.component';
import { VistaTablaComponent } from './vista-tabla/vista-tabla.component';
import { VistaTarjetaComponent } from './vista-tarjeta/vista-tarjeta.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PeliculaService],
  bootstrap: [AppComponent],
})
export class AppModule {}

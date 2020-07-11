import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { VistaTablaComponent } from "./vista-tabla/vista-tabla.component";
import { VistaTarjetaComponent } from "./vista-tarjeta/vista-tarjeta.component";
import { LibroComponent } from "./libro/libro.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { TarjetaUsuarioComponent } from "./tarjeta-usuario/tarjeta-usuario.component";
import { PostComponent } from "./post/post.component";

//definición de las rutas de la navegación, donde path es la dirección y el component es el componente al que apunta esa dirección
const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
  },
  {
    path: "tarjeta",
    component: VistaTarjetaComponent,
  },
  {
    path: "tabla",
    component: VistaTablaComponent,
  },
  {
    path: "libro",
    component: LibroComponent,
  },

  {
    path: "usuario",
    component: UsuarioComponent,
  },

  {
    path: "tarjeta-usuario",
    component: TarjetaUsuarioComponent,
  },

  {
    path: "post",
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

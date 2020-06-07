import { Component, OnInit, ViewChild } from "@angular/core";
import { Pelicula } from "../models/pelicula.models";
import { PeliculaService } from "../services/pelicula.service";
// importa NgForm para trabajar con formulario
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  pelicula: any;

  // ViewChild se utiliza para acceder a elementos (en este caso formulario) HTML. Dentro del () colocamos el ID del elemento HTML al cual queremos acceder, en este caso formpeli que es una referencia a mi formulario
  // se crea una variable formpeli de tipo NgForm para poder trabajar en el ts con el formulario
  @ViewChild("formpeli") formpeli: NgForm;

  constructor(private peliculasService: PeliculaService) {
    this.pelicula = {
      nombre: "",
      genero: "",
      link: "",
    };
  }

  ngOnInit() {}

  //guardamos una películas en el servicio
  guardar() {
    // saco c/u de los valores de los input del formulario. La variable después de 'value' debe coincidir con la del formulario
    this.pelicula.nombre = this.formpeli.value.nombre;
    this.pelicula.genero = this.formpeli.value.genero;
    this.pelicula.link = this.formpeli.value.link;
    // llama a la función del servicio para guardar la película
    this.peliculasService.setPelicula(
      this.pelicula.nombre,
      this.pelicula.genero,
      this.pelicula.link
    );
    // función que ya trae el formulario y que lo resetea. El reset() es una función propia del NgForm
    this.formpeli.reset();
  }
}

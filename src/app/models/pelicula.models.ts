export class Pelicula {
  creado: Date;

  constructor(
    public nombre: string,
    public genero: string,
    public link: string
  ) {
    this.creado = new Date();
  }
}

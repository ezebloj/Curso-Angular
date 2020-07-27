// la interface define la forma que tiene el objeto. La forma viene de como responde el servidor (ver API)
// ? indica que puede o no estar esa propiedad. Se puede reemplazar por un Partial<IUsuario> cuando se define la variable en la función
export interface IUsuario {
  id?: number;
  first_name?: string;
  last_name?: string;
  gender?: string;
  dob?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  status?: string;
  _links?: {
    self?: {
      href?: string;
    };
    edit?: {
      href?: string;
    };
    avatar?: {
      href?: string;
    };
  };
}

export interface IRtaGetServidor {
  _meta: any;
  result: IUsuario[];
}

export interface IRtaGetUsuarioServidor {
  _meta: any;
  result: IUsuario;
}

export interface IRtaDeleteServidor {
  _meta: any;
  result: any;
}

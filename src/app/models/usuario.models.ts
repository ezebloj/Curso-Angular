// la interface define la forma que tiene el objeto. La forma viene de como responde el servidor (ver API)
export interface IUsuario {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  status: string;
  _links: {
    self: {
      href: string;
    };
    edit: {
      href: string;
    };
    avatar: {
      href: string;
    };
  };
}

export interface IRtaGetServidor {
  meta: any;
  result: IUsuario[];
}

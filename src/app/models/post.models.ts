export interface IPost {
  id: string;
  user_id: string;
  title: string;
  body: string;
  _links: {
    self: {
      href: string;
    };
    edit: {
      href: string;
    };
  };
}

export interface IRtaGetServidor {
  meta: any;
  result: IPost[];
}

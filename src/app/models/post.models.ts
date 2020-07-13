export interface IPost {
  id: number;
  user_id: number;
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

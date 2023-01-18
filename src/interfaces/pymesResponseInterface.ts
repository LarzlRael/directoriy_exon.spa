export interface PymesResponseInterface {
  urlImages:      string[];
  verificado:     string;
  _id:            string;
  nombre:         string;
  email:          string;
  telefono:       string;
  localizacion:   string;
  direccion:      string;
  description:    string;
  redes_sociales: RedesSociales[];
  __v:            number;
  profileImage?:  string;
  visible?:       boolean;
  categoria?:     string;
  departamento?:  string;
  propietario?:   string;
  updatedAt?:     Date;
  urlNegocio?:    string;
  idUser?:        string;
  createdAt?:     Date;
}

export interface RedesSociales {
  _id:          string;
  nombre:       string;
  urlRedSocial: string;
}

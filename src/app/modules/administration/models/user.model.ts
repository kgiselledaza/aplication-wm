export interface User {
  IdUsuario?: number;
  CodUsuario?: string;
  Nombre?: string;
  Genero?: string;
  Usuario?: string;
  Email?: string;
  Identificacion?: string;
  IdCompania?: 0;
  CodCompania?: string;
  TipoCompania?: string;
  FiltraSector?: boolean;
  CamposAdicionales?: string;
  CambiarContrasena?: boolean;
  CtrlActivo?: boolean;
  Contrasena?: string;
  AplicaProximidadControl?: boolean;
}

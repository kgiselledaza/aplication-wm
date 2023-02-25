import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

export class BaseExtendedService<T> extends BaseService {
  constructor(
    override readonly http: HttpClient,
    override readonly api: string,
    readonly urlBaseAPI = ''
  ) {
    super(http, api, urlBaseAPI);
  }

  obtener() {
    return this.getMethod('Obtener');
  }

  crear(ObjEntidad: T) {
    return this.postMethod('Crear', [ObjEntidad]);
  }

  modificar(ObjEntidad: T) {
    return this.postMethod('Modificar', [ObjEntidad]);
  }

  eliminar<TValue>(id: TValue) {
    return this.postMethod('Eliminar', [id]);
  }
}

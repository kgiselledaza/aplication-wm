import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

export class BaseService {
  protected urlBaseApi: string;
  protected nameApi: string;

  constructor(
    readonly http: HttpClient,
    readonly api: string,
    readonly urlBase = ''
  ) {
    if (urlBase && urlBase.length > 0) {
      this.urlBaseApi = urlBase;
    } else {
      this.urlBaseApi = ConfigService?.settings?.urlBaseApi;
    }

    this.nameApi = api;
  }

  get() {
    return this.http.get(`${this.urlBaseApi}${this.nameApi}/`);
  }

  getExterno(externo: string) {
    return this.http.get(`${this.urlBaseApi}${externo}/`);
  }

  getMethod(method: string) {
    return this.http.get(`${this.urlBaseApi}${this.nameApi}/${method}`);
  }

  getMethodExterno(externo: string, method: string) {
    return this.http.get(`${this.urlBaseApi}${externo}/${method}`);
  }

  post<TObject>(ObjEntidad: TObject) {
    return this.http.post(`${this.urlBaseApi}${this.nameApi}`, ObjEntidad);
  }

  postMethod<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.post(
      `${this.urlBaseApi}${this.nameApi}/${method}`,
      ObjEntidad
    );
  }

  postMethodExterno<TValue>(
    externo: string,
    method: string,
    ObjEntidad: TValue
  ) {
    return this.http.post(`${this.urlBaseApi}${externo}/${method}`, ObjEntidad);
  }

  put<TObject>(ObjEntidad: TObject) {
    return this.http.put(`${this.urlBaseApi}${this.nameApi}`, ObjEntidad);
  }

  putMethod<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.put(
      `${this.urlBaseApi}${this.nameApi}/${method}`,
      ObjEntidad
    );
  }

  putMethodExterno<TValue>(
    externo: string,
    method: string,
    ObjEntidad: TValue
  ) {
    return this.http.put(`${this.urlBaseApi}${externo}/${method}`, ObjEntidad);
  }

  delete<TValue>(id: TValue) {
    return this.http.delete(`${this.urlBaseApi}${this.nameApi}/${id}`);
  }

  deleteMethod<TValue>(method: string, id: TValue) {
    return this.http.delete(
      `${this.urlBaseApi}${this.nameApi}/${method}/${id}`
    );
  }

  deleteMethodExterno<TValue>(externo: string, method: string, id: TValue) {
    return this.http.delete(`${this.urlBaseApi}${externo}/${method}/${id}`);
  }
}

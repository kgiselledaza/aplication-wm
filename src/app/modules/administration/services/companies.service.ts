import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseExtendedService } from '@core/services/base-extended.service';
import { Company } from '../models/companie.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService extends BaseExtendedService<Company> {
  constructor(override readonly http: HttpClient) {
    super(http, 'Empresa');
  }
}

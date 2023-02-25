import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseExtendedService } from '@core/services/base-extended.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseExtendedService<User> {
  constructor(override readonly http: HttpClient) {
    super(http, 'Usuario');
  }
}

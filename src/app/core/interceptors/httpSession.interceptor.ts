import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpSessionInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    try {
      const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWlud2ViIiwiaWRfdXN1YXJpbyI6Ijk5OTgiLCJ0aXBvX2FwbGljYWNpb24iOiJXZWIiLCJjbGllbnRlIjoid20wMSIsImZlY2hhX3ZlbmNpbWllbnRvIjoiMCIsInZlcnNpb24iOiIxLjAiLCJleHAiOjE2NzcyMTEwNTUsImlzcyI6IldNLVNBTEVTIiwiYXVkIjoiV0VCIEFQSSJ9.X0MAuMsUjujEkqT6aAlPerYFLGNeZR7TBXg5o_NFQhY';
      let newRequest = request;
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
      return next.handle(newRequest);
    } catch (e) {
      console.log('error', e);
      return next.handle(request);
    }
  }
}

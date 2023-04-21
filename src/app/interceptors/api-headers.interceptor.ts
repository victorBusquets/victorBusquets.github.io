import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiHeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addApiHeaders(req));
  }

  private addApiHeaders(request: HttpRequest<unknown>): HttpRequest<unknown>{
    return request.clone({
      setHeaders: {
        'X-RapidAPI-Host': environment.rapidApiHost,
        'X-RapidAPI-Key': environment.rapidApiKey
      }
    });
  }
}
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private notifierService: NotifierService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepting this");
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status == 404) {
            this.notifierService.notify('error', 'Não foi possível estabelecer conexão com o servidor')
          }
          return throwError(error.status)
        })
      )
  }



}

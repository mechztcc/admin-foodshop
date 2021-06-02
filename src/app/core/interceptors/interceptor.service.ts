import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepting this");
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = ''
          if(error.error instanceof ErrorEvent) {
            errorMsg = `Algo deu errado ${error.error.message}`
          } else {
            errorMsg = `Erro novamente ${error.status}`
          }
          window.alert(errorMsg)
          return throwError(errorMsg)
        })
      )
  }



}

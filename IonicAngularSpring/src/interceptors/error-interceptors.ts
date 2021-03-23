import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs'; // IMPORTANTE: IMPORT ATUALIZADO
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passsou pelo intercptor");
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  console.log('event--->>>', event);
                }
                return event;
              }),
              catchError((error: HttpErrorResponse) => {
                let errorObj = error;
                if(errorObj.error) {
                    errorObj = errorObj.error
                }
           
                console.log("Erro detectado pero interceptor");
                console.log(errorObj);

                return throwError(errorObj);
              }));
        
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs'; // IMPORTANTE: IMPORT ATUALIZADO
import { map, catchError } from 'rxjs/operators';
import { StorageService } from 'src/services/storage.service';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private storage: StorageService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passsou pelo AuthInterceptor");
        let localUser = this.storage.getLocalUser();
        let N = API_CONFIG.baseUrl.length;
        let requestToAPI = req.url.substring(0,N) == API_CONFIG.baseUrl;

        if(localUser && requestToAPI) {
            const authReq = req.clone({headers:req.headers.set('Authorization', 'Bearer ' + localUser.token)})
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
                

        
    }

}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
   
   export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((err: HttpErrorResponse) => {
            let errorMessage = '';
            if (err.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${err.error.message}`;
            } else {
              // server-side error
              errorMessage = err.error.message || err.statusText; //`Error Code: ${error.status}\nMessage: ${error.message}`;
            }

            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                // this.router.navigate(['/login']);
            }
           
            return throwError(errorMessage);
          })
        )
    }
   }
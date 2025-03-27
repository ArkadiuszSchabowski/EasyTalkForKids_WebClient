import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const toastr = inject(ToastrService);

    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 0:
              toastr.error(
                'Nie można połączyć się z serwerem! Sprawdź połączenie internetowe lub spróbuj ponownie później.'
              );
              break;
            case 400:
            case 409:
              toastr.error(error.error);
              break;
            case 401:
              toastr.error('Nie masz uprawnień do wykonania tej akcji!');
              break;
            case 500:
              toastr.error(
                'Błąd serwera! Sprawdź połączenie internetowe lub spróbuj ponownie później.'
              );
              break;
          }
        }
        return throwError(() => error);
      })
    );
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Usuario} from '../models/usuario';
import {catchError, retry} from 'rxjs/operators';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuario';

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.url}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createUsuario(usuario: any): Observable<any> {
    return this.httpClient.post(this.url, usuario, {
      responseType: 'text'
    })
      .pipe(catchError(this.handleError));
  }

  updateUsuario(usuario: any): Observable<any> {
    return this.httpClient.put(`${this.url}/${usuario.id}`, usuario, {
      responseType: 'text'
    })
      .pipe(catchError(this.handleError));
  }
  deleteUsuario(usuario: any): Observable<any> {
    return this.httpClient.delete(`${this.url}/${usuario.id}`, {
      responseType: 'text'
    })
      .pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line:typedef
  handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

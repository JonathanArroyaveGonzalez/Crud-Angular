import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioModel } from '../modelos/usuario.model';

@Injectable({
    providedIn: 'root',
  })
export class UsuarioService {
    private urlBase: string = "http://localhost:4567/usuarios";  // Cambia la URL según tu configuración del servidor

constructor(private http:HttpClient) { }
   listarUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.urlBase + '/todos');
  }

  BuscarUsuario(identificacion: string): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.urlBase}/${identificacion}`);
  }
  crearUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post<any>(this.urlBase, usuario);
  }

  actualizarUsuario(identificacion: string, usuario: UsuarioModel): Observable<any> {
    return this.http.put<UsuarioModel>(`${this.urlBase}/${identificacion}`, usuario);
  }

  eliminarUsuario(identificacion: string): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${identificacion}`);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios = [
    { nombre: 'Ana Gómez', correo: 'ana@gmail.com' },
    { nombre: 'Carlos Ruiz', correo: 'carlos@gmail.com' },
    { nombre: 'María López', correo: 'maria@gmail.com' },
  ];

  constructor() {}

  getUsuarios() {
    return this.usuarios;
  }
}

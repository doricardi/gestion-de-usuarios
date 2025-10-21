import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

@NgModule({
  imports: [CommonModule, ListaUsuariosComponent, DetalleUsuarioComponent],
  exports: [ListaUsuariosComponent, DetalleUsuarioComponent],
})
export class UsuariosModule {}

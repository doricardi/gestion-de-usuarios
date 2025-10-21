import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaUsuariosComponent },
  { path: 'detalle', component: DetalleUsuarioComponent },
  { path: '**', redirectTo: 'lista' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

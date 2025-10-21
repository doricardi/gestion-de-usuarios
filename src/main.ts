import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './app/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './app/usuarios/detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaUsuariosComponent },
  { path: 'detalle', component: DetalleUsuarioComponent },
  { path: '**', redirectTo: 'lista' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

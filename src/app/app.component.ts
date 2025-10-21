import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // necesario para <router-outlet>
    ListaUsuariosComponent, // para usar tu componente dentro del template
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gestion-de-usuarios';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../usuario.service';
import { DetalleUsuarioComponent } from '../detalle-usuario/detalle-usuario.component';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    DetalleUsuarioComponent, // 👈 necesario para usar <app-detalle-usuario>
  ],
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent {
  usuarios: any[] = [];
  usuarioSeleccionado: any = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  seleccionarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
  }
}

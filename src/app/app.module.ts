import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  // declarations: [AppComponent],  <-- BORRAR ESTA LÍNEA
  imports: [
    BrowserModule,
    UsuariosModule,
    AppComponent, // 👈 Importar el componente standalone
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {}

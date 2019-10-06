import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule // para utilizar error y loading Component
  ],
  exports: [
    // ListaComponent,
    // UsuarioComponent
  ]
})
export class UsuariosModule { }

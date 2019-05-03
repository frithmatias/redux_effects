import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ ListaComponent, UsuarioComponent ],
	imports: [ CommonModule, HttpClientModule ],
	exports: [ ListaComponent, UsuarioComponent ]
})
export class UsuariosModule {}

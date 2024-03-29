import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
	{ path: 'lista', component: ListaComponent },
	{ path: 'usuario/:id', component: UsuarioComponent },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forRoot(routes) ], // forRoot porque es el archivo de rutas principal.
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

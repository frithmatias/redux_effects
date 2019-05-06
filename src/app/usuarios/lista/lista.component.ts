import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import * as usuariosActions from '../../store/actions';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styles: []
})
export class ListaComponent implements OnInit {
	usuarios: Usuario[] = [];
	loading: boolean;
	error: any;
	constructor(
		private store: Store<AppState> // private usuarioService: UsuarioService
	) {}

	ngOnInit() {
		// Ya no voy a obtener los usuarios desde el servicio, a partir de que las acciones y los reducers
		// ya estan configurados, ahora si los vamos a implementar mi patrón REDUX y obtener la data de una
		// solicitud extera a través de LOS EFECTOS.
		// this.usuarioService.getUsuarios().subscribe((data: Usuario) => {
		// 	this.usuarios = data;
		// });

		this.store.dispatch(new usuariosActions.CargarUsuarios());
		this.store.select('usuarios').subscribe((resp) => {
			console.log(resp);
			this.usuarios = resp.users;
			this.loading = resp.loading;
			this.error = resp.error;
		});
		// El metodo CARGAR_USUARIOS() no recibe ningún parametro sólo llama la acción, y en el reducer sólo
		// pone el loading en TRUE.

		// AHORA cuando yo llame la acción CARGAR_USUARIOS se va a disparar el efecto @Effect() cargarUsuarios$

		// Despues de la clase de efectos, vamos a registrarla para que empiece a funcionar.

		// APP.MODULE.TS
		// import { EffectsModule } from '@ngrx/effects';
		// @NgModule({
		// 	imports: [
		// 		StoreModule.forRoot(appReducers),
		// 		EffectsModule.forRoot(EffectsArr), // Me pide como argumento un array con todas las clases que tienen efectos
		// 	],
		// })

		// Para proveer todas las clases que tienen efectos creamos

		// APP/STORE/EFFECTS/INDEX.TS
		// import { UsuariosEffects } from './usuairos.effects';
		// export const EffectsArr: any[] = [ UsuariosEffects ]; // array con todos los efectos.

		// Ahora si al llamar la acción CargarUsuarios.

		// CargarUsuarios {type: "[Usuarios] Cargar Usuarios"}
		// 		type: "[Usuarios] Cargar Usuarios"
	}
}

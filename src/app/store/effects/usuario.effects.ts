import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {
	constructor(private actions$: Actions, private usuarioService: UsuarioService) {}
	@Effect()
	cargarUsuario$: Observable<Action> = this.actions$.pipe(
		ofType(usuarioActions.CARGAR_USUARIO),
		switchMap((accion: usuarioActions.CargarUsuario) => {
			console.log(accion); // -> CargarUsuario {id: "1", type: "[Usuario] Cargar Usuario"}
			// cuando llamo CARGAR_USUARIO en la acción tengo los argumentos que yo definí en la accion CargarUsuario en USUARIO.ACTIONS.TS
			// voy a notar que si hago 'accion.' no aparecen los argumentos definidos en la acción, para eso tengo que definirle el tipo
			// (accion: usuarioActions.CargarUsuario)

			// o bien -> const id = accion['id'] usando [''] si no definí el tipo y sólo deje switchMap((accion) => {})
			return this.usuarioService
				.getUsuario(accion.id)
				.pipe(
					map((user) => new usuarioActions.CargarUsuarioSuccess(user)),
					catchError((error) => of(new usuarioActions.CargarUsuarioFail(error)))
				);
		})
	);
}

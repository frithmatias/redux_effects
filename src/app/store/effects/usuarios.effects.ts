import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { UsuarioService } from 'src/app/services/usuario.service';

// El decorador de un servicio es @injectable()
@Injectable()
export class UsuariosEffects {
	// Vamos a escuchar acciones que van a ser enviadas al STORE
	// Para estar pendiente de esas acciones necesito inyectar algo en el constructor
	// ese algo es actions$. El signo $ es como si fuera una S mayúscula NADA MAS no hace nada
	// en especial y sugiere que va a devolver un observable. Y es de tipo Actions, pero
	// no del tipo Actions importado del STORE, sino importado desde EFFECTS. Para eso vamos a
	// instalar los effects.

	// npm install @ngrx/effects --save

	constructor(private actions$: Actions, private usuarioService: UsuarioService) {
		// Tipo Actions no desde '@ngrx/store' sino desde '@ngrx/effects'
	}

	// yo quiero estar pendiente de la acción CARGAR_USUARIOS cuando se dispare la accion CARGAR_USUARIOS va a
	// escuchar el observable actions$. Para que eso ocurra tengo que agregar el decorador @Effect()

	@Effect() // @Effect({ dispatch: false })
	// { dispatch: false } Evita que un efecto haga un deispatch de una acción. Lo vamos a dejar temporalmente ya que
	// genera un loop infinito, porque el efecto se subscribe a una acción a la que al mismo tiempo hace el dispatch.
	// Voy a declarar una propiedad cargarUsuarios$ en la clase, que es lo mismo que declararla arriba del constructor.
	cargarUsuarios$: Observable<Action> = this.actions$.pipe(
		ofType(usuariosActions.CARGAR_USUARIOS), // defino el tipo de las acciones que voy a escuchar
		// pipe siempre se adjunta a un observable.
		// el operador switchMapr cancela un observable y la suscripción a (usuariosActions.CARGAR_USUARIOS) y se
		// subscribe a otro observable. Cancela la subscripcion de usuarios porque no me interesa cargar usuarios pero
		// si me interesa disparar un nuevo observable.
		switchMap(() => {
			return (
				this.usuarioService
					.getUsuarios()
					// Cuando se ejecuta cprrectamte getUsuarios() tenemos que hacer un dispatch de la acción SUCCESS
					// para eso ponemos otro operador pipe() y lo pasamos por un operador map() de rxjs
					.pipe(
						map((users) => new usuariosActions.CargarUsuariosSuccess(users)),
						catchError((error) => of(new usuariosActions.CargarUsuariosFail(error)))
						// Me va a dar un error porque catchError espera un observable, y yo le estoy pasando una acción.
						// Para convertir la acción en un observable importo y utilizo el operador 'of'
					)
			);
		})
	); // Devuelve un observable

	// vamos disparar CARGAR_USUARIOS desde LISTA.COMPONEN.TS
}

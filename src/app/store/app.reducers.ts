import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

// AppState es la estructura de mi Store. Es una interface de interfaces.
export interface AppState {
	// la estructura de mi AppState
	usuarios: reducers.UsuariosState;
	usuario: reducers.UsuarioState;
	// aca van todos mos objetos vamos a tener varios.
}

// Vamos a crear el ActionReducerMap que es la combinación de todos mis reducers
// que usan la interface de AppState.

export const appReducers: ActionReducerMap<AppState> = {
	// Mapa de todos mis reducers
	usuarios: reducers.usuariosReducer, // metodo usuariosReducer() en usuarios.reducer.ts
	usuario: reducers.usuarioReducer
};
// <AppState>Es un objeto generico tengo que especificarle mi tipo manual que en este caso es AppState

import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuariosState {
	users: Usuario[];
	loaded: boolean;
	loading: boolean;
	error: any;
}

const estadoinicial: UsuariosState = {
	users: [],
	loaded: false,
	loading: false,
	error: null
};

// Este reducer va a regresar algo de tipo UsuariosState
export function usuariosReducer(state = estadoinicial, action: fromUsuarios.usuariosAcciones): UsuariosState {
	switch (action.type) {
		case fromUsuarios.CARGAR_USUARIOS:
			return { ...state, loading: true, error: null };

		case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
			return { ...state, loading: false, loaded: true, users: [ ...action.usuarios ] };
		// siempre tengo que ROMPER la relacion con los objetos anteriores usando el operador spread

		case fromUsuarios.CARGAR_USUARIOS_FAIL:
			return {
				...state,
				loading: false,
				loaded: false,
				// si yo no quiero todo el payload sino sólo aglunos datos, en lugar de devolver 'error: action.payload'

				error: {
					status: action.payload.status,
					message: action.payload.message,
					url: action.payload.url
				}
			};

		default:
			return state;
	}
}

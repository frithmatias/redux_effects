import { Usuario } from 'src/app/models/usuario.model';
import * as fromUsuario from '../actions';

export interface UsuarioState {
	user: Usuario;
	loaded: boolean;
	loading: boolean;
	error: any;
}

const estadoinicial: UsuarioState = {
	user: null,
	loaded: false,
	loading: false,
	error: null
};

// Este reducer va a regresar algo de tipo UsuariosState
export function usuarioReducer(state = estadoinicial, action: fromUsuario.usuarioAcciones): UsuarioState {
	switch (action.type) {
		case fromUsuario.CARGAR_USUARIO:
			return { ...state, loading: true, error: null };

		case fromUsuario.CARGAR_USUARIO_SUCCESS:
			return { ...state, loading: false, loaded: true, user: action.usuario };
		// siempre tengo que ROMPER la relacion con los objetos anteriores usando el operador spread

		case fromUsuario.CARGAR_USUARIO_FAIL:
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

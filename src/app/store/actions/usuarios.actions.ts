import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios Success';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios Fail';

export class CargarUsuarios implements Action {
	readonly type = CARGAR_USUARIOS; // Sin argumentos, sólo quiero cargar los usuarios.
}

export class CargarUsuariosSuccess implements Action {
	readonly type = CARGAR_USUARIOS_SUCCESS;
	constructor(public usuarios: Usuario[]) {} // Esta accion se ejecuta cuando ya tengo los usuarios y los guardo en el store
}

export class CargarUsuariosFail implements Action {
	readonly type = CARGAR_USUARIOS_FAIL;
	constructor(public payload: any) {}
}

export type usuariosAcciones = CargarUsuarios | CargarUsuariosSuccess | CargarUsuariosFail;

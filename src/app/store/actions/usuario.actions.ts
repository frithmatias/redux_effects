import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = '[Usuario] Cargar Usuario';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar Usuario Success';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar Usuario Fail';

export class CargarUsuario implements Action {
	readonly type = CARGAR_USUARIO;
	constructor(public id: string) {}
}

export class CargarUsuarioSuccess implements Action {
	readonly type = CARGAR_USUARIO_SUCCESS;
	constructor(public usuario: Usuario) {} // Esta accion se ejecuta cuando ya tengo los usuarios y los guardo en el store
}

export class CargarUsuarioFail implements Action {
	readonly type = CARGAR_USUARIO_FAIL;
	constructor(public payload: any) {}
}

export type usuarioAcciones = CargarUsuario | CargarUsuarioSuccess | CargarUsuarioFail;

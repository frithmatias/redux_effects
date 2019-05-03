import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	constructor(private http: HttpClient) {}

	getUsuarios() {
		//https://reqres.in/api/users
		return (
			this.http
				.get('https://reqres.in/api/users')
				// voy a filtrar sólo los datos
				.pipe(
					map((resp) => {
						return resp['data']; // no puedo poner la notación resp.data, porque no estoy seguro del tipo de dato.
					})
				)
		);
	}
}

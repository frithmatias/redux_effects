import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Usuario } from 'src/app/models/usuario.model';
import { CargarUsuario } from 'src/app/store/actions';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styles: []
})
export class UsuarioComponent implements OnInit {
	usuario: Usuario;
	loading: boolean;
	loaded: boolean;
	error: any;
	constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((data) => {
			this.store.dispatch(new CargarUsuario(data.id));
		});

		this.store.select('usuario').subscribe((data) => {
			this.usuario = data.user;
			this.loading = data.loading;
			this.loaded = data.loaded;
			this.error = data.error;
		});
	}
}

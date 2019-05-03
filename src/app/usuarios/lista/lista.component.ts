import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styles: []
})
export class ListaComponent implements OnInit {
	usuarios: Usuario;
	constructor(private usuarioService: UsuarioService) {}

	ngOnInit() {
		this.usuarioService.getUsuarios().subscribe((data: Usuario) => {
			this.usuarios = data;
		});
		// this.usuarioService.getUsuarios().subscribe((data: any) => {
		// 	this.usuarios = data.data;
		// });
	}
}

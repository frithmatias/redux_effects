import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, SharedModule, UsuariosModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

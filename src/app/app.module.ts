import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// NGRX - STORE
import { StoreModule } from '@ngrx/store';

// NGRX - EFFECTS
import { EffectsModule } from '@ngrx/effects';

// NGRX - StoreDevTools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// AppStore --Global
import { appReducers } from './store/app.reducer';

//  Effect -- Global
import { effectsArr } from './store/effects/index';

// Módulos Personalizados
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { AppComponent } from './app.component';

// Módulo de Rutas
import { AppRoutingModule } from './app-routing.module';

// Environment
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( appReducers,  {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot(effectsArr),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    SharedModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions,
                public usuariosService: UsuarioService) {}

    // Para escuchar una acción en particular
    // dispatch -> para que este efecto no dispare otra acción
    // @Effect({ dispatch: false})
    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(usuariosActions.CARGAR_USUARIOS)
    ).pipe(
        // switchMap -> Recibe un observable, lo cancela y regresa otro observable
       switchMap(() => {
           return this.usuariosService.getUsers()
               .pipe(
                   map( users => new usuariosActions.CargarUsuariosSuccess(users)),
                   //of -> sirve para convertir algo en un observable
                   catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
               );
       })
    );


}
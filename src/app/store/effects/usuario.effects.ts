import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions,
                public usuariosService: UsuarioService) {}

    // Para escuchar una acción en particular
    // dispatch -> para que este efecto no dispare otra acción
    // @Effect({ dispatch: false})
    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        // ACTION
        ofType(usuarioActions.CARGAR_USUARIO)
    )
    .pipe(
        // switchMap -> Recibe un observable, lo cancela y regresa otro observable
        // action -> esta action es el CARGAR_USUARIO, propiedades type, id
       switchMap((action) => {
           console.log(action);
           const id = action['id'];

           return this.usuariosService.getUserById(id)
               .pipe(
                   // si obtiene el dato
                   map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                   //of -> sirve para convertir algo en un observable
                   catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
               );
       })
    );


}
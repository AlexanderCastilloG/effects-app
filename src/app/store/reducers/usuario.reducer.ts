import { Usuario } from 'src/app/models/usuario.modelo';
import * as fromUsuario from '../actions';

export interface UsuarioState {
    user: Usuario;
    loaded: boolean; //cargado
    loading: boolean; // cargando ...
    error: any;
}

const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer( state = estadoInicial, action: fromUsuario.usuarioAcciones): UsuarioState {

    switch(action.type) {

        case fromUsuario.CARGAR_USUARIO: 
            return {
                ...state,
                user: null,
                loading: true,
                error: null
            };
        
        case fromUsuario.CARGAR_USUARIO_SUCCESS: 
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.usuario}
            };

        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            }

        default: 
            return state;
    }
}



import { UsuariosEffects } from './usuarios.effects';
import { UsuarioEffects } from './usuario.effects';

// Todo array Effects
export const effectsArr: any[] = [UsuariosEffects, UsuarioEffects];

// En caso que lo importemos de otro lugar
export * from './usuarios.effects';
export * from './usuario.effects';
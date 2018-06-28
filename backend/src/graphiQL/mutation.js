import {usuarioMutation} from './recursos/ususario/usuario.schema'
import {tokenMutations} from './recursos/token/token.schema'

const Mutation = `
    type Mutation {
        ${tokenMutations}
        ${usuarioMutation}
       
    }
`;

export {
    Mutation
}
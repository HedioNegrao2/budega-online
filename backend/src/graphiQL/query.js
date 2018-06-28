import {usuarioQuery} from './recursos/ususario/usuario.schema'
import {tokenTypes} from './recursos/token/token.schema'


const Query = `
    type Query {       
        ${usuarioQuery}      
    }
`;

export {
    Query
}
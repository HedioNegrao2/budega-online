const usuarioTypes = `
    type Usuario {
            id: ID!
            nome: String!
            email: String!
            password: String!
    }`;

const usuarioQuery = ` 
        todosUsuarios(first: Int, offset: Int): [Usuario!]!
    `;

const usuarioMutation = ` 
        criarUsuario(nome: String!, email: String!, password: String!): Usuario
    
    `; 


export {
    usuarioTypes, 
    usuarioQuery,
    usuarioMutation  
}
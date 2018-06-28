import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import { Query } from './query';
import { Mutation } from './mutation';

import {tokenResolvers} from './recursos/token/token.resolvers'
import {usuarioResolvers} from './recursos/ususario/usuario.resolvers';

import {tokenTypes} from './recursos/token/token.schema';
import {usuarioTypes} from './recursos/ususario/usuario.schema';



const resolvers = merge(
    usuarioResolvers,
    tokenResolvers

);


const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        tokenTypes,
        usuarioTypes
    ],
    resolvers
});

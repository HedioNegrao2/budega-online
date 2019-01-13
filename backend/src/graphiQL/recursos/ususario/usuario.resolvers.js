import db from '../../../models';
import {handleError}  from  '../../../comun/tratamento.erros';
import { isAuthenticated  } from '../../composable/verify-token.resolver'
import { authResolver } from '../../composable/auth.resolver'
import {  combineResolvers } from 'graphql-resolvers'


const banco = db;
// https://www.apollographql.com/docs/graphql-tools/resolvers

const isAuthenticated2 = (root, args, context, info) => {
    console.log('........sete')
  }


export const usuarioResolvers = {
    Query: {
         todosUsuarios : combineResolvers( authResolver,   (req, args, context, info) => {
           console.log('consultando')
            //    console.log(' ------- req')
            //   console.log(req)
            //   console.log(' ------- context')
            //   console.log( context)
            //   console.log(' ------- info')
            //   console.log( info)
            //   console.log(' ------- args')
            //   console.log(args)
          return    banco.Usuario.findAll().catch(handleError);
            }) 
    },
    
    Mutation : {  
      
            async  criarUsuario (parent, args)  {
                console.log(' imprimindo args', args)
                return await  db.Usuario.create(args).catch(handleError)               
        }    
    }
}
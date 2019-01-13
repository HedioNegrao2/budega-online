"use strict";
import restify from 'restify'
import { graphqlRestify,graphiqlRestify } from 'apollo-server-restify'
import meuSchema from '../graphiQL/schema'
import db from '../models'
import {handleError}  from  '../comun/tratamento.erros'
import { extractJwt } from './extrair-jwt'


const  dbs = db

const PORT = 3005

const server = restify.createServer({
  title: 'Apollo Server',
  version: '1.0.0'
});


const graphQLOptions  = { 
    schema: meuSchema ,
    graphiql: true  
   
};

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.on('restifyError', handleError);
 
server.post(
    '/api',  
    extractJwt(),
    (req, res, next) => {
      console.log( ' tentando post')
      req['context']['db'] = dbs 
      next()
    },   
    graphqlRestify(
      (req) => ({
        schema: meuSchema,    
        context: req['context']})
    )
);
server.get(
  '/api',
  extractJwt(),
  (req, res, next) => {  
    console.log( ' tentando get')  
    req['context']['db'] = dbs;
    next();
  },
  graphqlRestify(

    (req) => ({
      schema: meuSchema,    
      context: req['context']})
  )
)
server.get(
    '/graphiql',  
    graphiqlRestify({ endpointURL: '/api' })

  );
db.sequelize.sync().done(
  
  server.listen(PORT, () => console.log(`Listening on ${PORT}`))
) ;

console.log(' Sincronizado')



export default server;
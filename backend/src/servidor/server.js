"use strict";
import restify from 'restify'
import { graphqlRestify,graphiqlRestify } from 'apollo-server-restify'
import meuSchema from '../graphiQL/schema'
import db from '../models'
import {handleError}  from  '../comun/tratamento.erros'
import { extractJwt } from './extrair-jwt'


const  dbs = db
//bs.sequelize.sync().done() ;

const PORT = 3000

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
    '/graphql',  
    extractJwt(),
    (req, res, next) => {
      req['context'] = {}
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
  '/graphql',
  extractJwt(),
  (req, res, next) => {
    req['context'] = {}; 
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
    graphiqlRestify({ endpointURL: '/graphql' })

  );


server.listen(PORT, () => console.log(`Listening on ${PORT}`));

export default server;
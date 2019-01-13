import * as jwt from 'jsonwebtoken';
//import { GraphQLFieldResolver } from "graphql";

// import { ComposableResolver } from "./composable.resolver";
// import { ResolverContext } from "../../interfaces/ResolverContextInterface";
 import { JWT_SECRET } from '../../comun/utils';



export const isAuthenticated = (root, args, context, info) => {
   
    
    return  (root, args, context, info) => {
        console.log('passando pelo isAuthenticated')
            const token = context.authorization.split(' ')[1];
                
            return jwt.verify(token, JWT_SECRET, (err, decoded) => {
                    if (!err) {
                        return resolver(parent, args, context, info);
                    }                    
                    throw new Error(`${err.name}: ${err.message}`);

            }        
        );
    
    }
}

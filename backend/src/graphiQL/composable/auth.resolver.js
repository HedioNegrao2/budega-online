

//export const authResolvers = [authResolver, verifyTokenResolver];


export const authResolver = (root, args, context, info) => {
    console.log('passando pelo authResolver')
    
    return  (root, args, context, info) => {
        if (context.authUser || context.authorization) {
            return resolver(parent, args, context, info);
        }
        throw new Error('Unauthorized! Token not provided!');         
    }
}





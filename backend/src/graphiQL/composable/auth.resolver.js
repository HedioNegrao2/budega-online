

//export const authResolvers = [authResolver, verifyTokenResolver];


export const authResolver = (root, args, context, info) => {
    console.log('passondo pelo resolver outauthResolver' )
   
       
    if (context.authUser || context.authorization) {
        console.log('dentro pelo resolver outauthResolver' )
        return resolver(parent, args, context, info)
    }  
    else
    {
        console.log('nao autorizado pelo resolver outauthResolver' )        
        throw new Error('Unauthorized! Token not provided!') 
    }       

}





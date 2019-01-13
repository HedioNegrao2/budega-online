import * as jwt from 'jsonwebtoken';

import db from '../models';
import { JWT_SECRET } from '../comun/utils';


export const extractJwt = (req, res, next)  => {   

    return (req, res, next) => {
        console.log('Extraindo o token')
        let authorization = req.header('authorization')
        let token = authorization ? authorization.split(' ')[1] : undefined;
        console.log(token)
        req['context'] = {};
        req['context']['authorization'] = authorization;
       
        if (!token) { return next() }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {

            if (err) { return next(); }

            db.User.findById(decoded.sub, {
                attributes: ['id', 'email']
            }).then((usuario) => {

                if (usuario) {
                    req['context']['user'] = {
                        id: usuario.get('id'),
                        email: usuario.get('email')
                    };
                }

                return next();

            });

        });

    };

};
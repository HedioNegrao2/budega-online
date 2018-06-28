import * as jwt from 'jsonwebtoken';

import db from '../models';
import { JWT_SECRET } from '../comun/utils';


export const extractJwt = (req, res, next)  => {
    console.log('passando pelo o extract token')

    return (req, res, next) => {
        console.log('passando return')
        let authorization = req.authorization;
        let token = authorization ? authorization.split(' ')[1] : undefined;
        console.log('passando token')
        req['context'] = {};
        req['context']['authorization'] = authorization;
        console.log('passando authorization')
        if (!token) { return next(); }
        console.log('passando next')
        jwt.verify(token, JWT_SECRET, (err, decoded) => {

            if (err) { return next(); }

            db.User.findById(decoded.sub, {
                attributes: ['id', 'email']
            }).then((usuario) => {

                if (usuario) {
                    req['context']['authUser'] = {
                        id: usuario.id,
                        email: usuario.email
                    };
                }

                return next();

            });

        });

    };

};
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../../comun/utils';

export const tokenResolvers = {

    Mutation: {      

        createToken: (parent, { email, password }, {db}) => {
            return db.Usuario.findOne({
                where: {email: email},
                attributes: ['id', 'password']
            }).then((user) => {

                let errorMessage = 'Unauthorized, wrong email or password!';
                if (!user || !user.isPassword(user.get('password'), password)) { throw new Error(errorMessage); }

                const payload = {sub: user.get('id')};

                return {
                    token: jwt.sign(payload, JWT_SECRET)
                }

            });
        }

    }

};
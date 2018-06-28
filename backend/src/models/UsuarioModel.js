import { genSaltSync, hashSync, compareSync } from 'bcryptjs'


export default function (sequelize, DataTypes) {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        photo: {
            type: DataTypes.BLOB({length: 'long'}),
            allowNull: true,
            defaultValue: null
            }
        },
        {
            tableName: 'usuarios',
            hooks: {
                beforeCreate: (usuario,  options) => {
                    const salt = genSaltSync();
                    usuario.password = hashSync(usuario.password, salt); 
                },
                beforeUpdate: (usuario, options) => {
                     if (usuario.changed('password')) {
                        const salt = genSaltSync();
                        usuario.password = hashSync(usuario.password, salt);
                    }
                    
                }
            }
    });

    Usuario.prototype.isPassword = (encodedPassword, password) => {
        return compareSync(password, encodedPassword);
    }
     
 //   isPassword = (encodedPassword, password) => {
 //       return compareSync(password, encodedPassword);
 //    } 
    return Usuario;
}
const express = require('express');
const morgan = require('morgan');
const { User } = require('./db');

const server = express();


server.use(express.json());
server.use(morgan('dev'));

//Meter info dentro de nuestros modelos: Crear usuarios

server.post('/user', async (req, res) => {
    try {
        const { name, lastname, birthday } = req.body;
        const newUser = await User.create({
            name, lastname, birthday
        })
         res.status(200).json(newUser)

    } catch (error) {
        res.status(404).send(error.message)
    }
})

server.get('/user', async(req, res) => {
    try {
        const { name } = req.query;

        if(!name){
            const allUsers = await User.findAll({
                atributtes: {exclude: ['birthday']} //me trae todo menos birthday
                // attributes: ['name', 'lastname'] //me trae solo lo que le solicite en el array
            });

            res.status(200).json(allUsers)
        }
        else{
            const usersByName = await User.findAll({
                where: {
                    name
                }
            })
            res.status(200).json(usersByName) 
        }


    } catch (error) {
        res.status(404).send(error.message)
    }
})

server.post('/user/find', async(req, res) => {
    try {
        
        const { name, lastname, birthday } = req.body;
        const user = await User.findOrCreate({ //sino lo encuentra lo crea
            where: {name}, //propiedad a coincidir
            defaults: {     //propiedades que crea junto con name
                lastname,
                birthday
            }
        });
        res.status(200).json(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})



server.delete('/user/:id', async (req, res) => {
    try {
        const { id } =req.params;

        const userDeleted = await User.findByPk(id);
        userDeleted.destroy();

        res.status(200).json(userDeleted);

    } catch (error) {
        res.status(404).send(error.message);

    }
})

server.get('/user/:id', async(req,res) => {
    try {
        const { id } =req.params;

        const userById = await User.findByPk(id);
        if(!userById) throw new Error('El usuario no existe');

        res.status(200).json(userById);

    } catch (error) {
        res.status(404).send(error.message);

    }
})

module.exports = server;
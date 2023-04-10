const express =  require("express")
const ventas = require("../models/ventas")

const router = express.Router()

//Insertar un dato
router.post('/venta', async (req, res) => {
    const {cantidad, total, usuario, producto} = req.body;
    
    try {
        const fechaAct = Date()
        
        const shop = new ventas({
            fecha: fechaAct,
            cantidad,
            total,
            usuario,
            producto
        });
        
        await shop.save();
        
        res.status(201).json({ message: 'venta registrada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Interno del Servidor' });
    }
});

//encontrar una venta de un usuario especifico por correo
router.get('/venta/user/:email', (req, res) => {
    userSchema
        .findOne({email: req.params.email})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    }) 


module.exports = router

/*
router.post('/venta', (req, res) => {
    
    const user = Ventas(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
*/

/*
//mostrar todos los datos
router.get('/venta', (req, res) => {
    ventas
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
*/

/*
//encontrar una venta de un usuario especifico por usuario
router.get('/venta/user/:usuario', (req, res) => {
    ventas
        .findOne({usuario: req.params.usuario})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
*/
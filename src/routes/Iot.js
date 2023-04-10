const express =  require("express")
const userSchema = require('../models/Iot')

const router = express.Router()

//Insertar un dato
router.post('/iot', (req, res) => {
  const user = userSchema(req.body)
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

//mostrar todos los datos
router.get('/iot', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//actualizar un usuario
router.put('/iot/:id', (req, res) => {
  const {id} = req.params
  const {led, led2, temperatura, humedad, peso, bomba} = req.body
  userSchema
    .updateOne({_id: id}, { $set: {led, led2, temperatura, humedad, peso, bomba}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

module.exports = router

/*
//Eliminar iot
router.delete("/iot/:id", (req, res) => {
  userSchema
    .deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
*/
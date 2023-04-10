const express =  require("express")
const userSchema = require('../models/user')
const router = express.Router()
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');

const valRegistro = Joi.object({
  usuario: Joi.string().min(3).max(255).required(),
  nombre: Joi.string().min(4).max(255).required(),
  apPaterno: Joi.string().min(4).max(255).required(),
  apMaterno: Joi.string().min(4).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(8).max(1024).required()
})

function encryptPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}


//Crear usuarios
router.post('/users', async (req, res) => {
  const { nombre, app, apm, telefono, email, password} = req.body;
  
  
  const isEmailExist = await userSchema.findOne({ email: req.body.email });
  if (isEmailExist) {
      return res.status(400).json(
          {error: 'El email ya existe, intenta con otro'}
      )
  }
  
  const hashedPassword = encryptPassword(password);
  const user = new userSchema({ 
    nombre, 
    app,
    apm,
    telefono,
    email,
    password: hashedPassword 
  });
  try {
    await user.save();
    res.status(201).json({ message: 'Usuario Creado' });
  } catch (err) {
    res.status(400).json({ message: 'Valio queso mano' });
  }
})

//Login
router.post('/users/login', async (req, res) => {
  const user = await userSchema.findOne({email: req.body.email})
    if(!user) return res.status(400).json({error: 'correo no encontrado'})
  
  const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).json({error: 'Constraseña invalida'})
  
  res.json({
      error: null,
      message: 'Bienvenido'
  })
})

//mostrar todos los datos
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

module.exports = router


//eliminar un usuario
/*
router.delete('/users/:id', (req, res) => {
  const {id} = req.params
  userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/

//mostrar todos los datos
/*
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})*/

/*
//encontrar el correo especifico
router.get('/users/email/:email', (req, res) => {
  userSchema
    .findOne({email: req.params.email})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/

/*
// Eliminar un usuario
router.delete('/users/:id', (req, res) => {
  userSchema
    .deleteOne({_id: req.params.id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/

/*
//actualizar un usuario
router.put('/users/:id', (req, res) => {
  const {id} = req.params
  const {nombre, app, apm, telefono, correo, contraseña} = req.body
  userSchema
    .updateOne({_id: id}, { $set: {nombre, app, apm, telefono, correo, contraseña}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/


/*
//encontrar un usuario especifico
router.get('/users/:id', (req, res) => {
  const {id} = req.params
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/

/*
//mostrar todos los datos
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/
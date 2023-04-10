const { default: mongoose } = require("mongoose")
const mongo = require("mongoose")

const userSchema =  mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  app: {
    type: String,
    require: true
  },
  apm: {
    type: String,
    require: true
  },
  telefono:{
  type: Number,
  require: true
  },
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  }
})

module.exports = mongoose.model('User', userSchema)

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Productos: {
        type: String,
        required: true,
    },
    descripción: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    Stock:{
        type: Number,
        required:true
    },
    categoria:{
        type: String,
        required:true
    },
    tipo: {
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('productos', userSchema);


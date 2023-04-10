const mongoose = require("mongoose");

const ventasSchema = mongoose.Schema({
    fecha: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        fer:'users',
        required:true
    },
    producto:{
        type: mongoose.Schema.Types.ObjectId,
        fer:'productos',
        required:true
    },
});

module.exports = mongoose.model('ventas', ventasSchema);


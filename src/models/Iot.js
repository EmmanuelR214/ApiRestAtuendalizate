const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Tarjeta: {
        type: String,
    },
    led: {
        type: Number,
    },
    led2: {
        type: Number,
    },
    temperatura:{
        type: Number,
    },
    humedad:{
        type: Number,
    },
    peso:{
        type: Number,
    },
    bomba:{
        type: Number,
    }
});

module.exports = mongoose.model('Iot', userSchema);


const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    
    title: {
        type: String,
        require: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;    //extraigo el parametro _id, y lo pongo en el parametro id (pero puede ser el que yo quiera)

    return object
})



module.exports = model( 'Evento', EventoSchema );
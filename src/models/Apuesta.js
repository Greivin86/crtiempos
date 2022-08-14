import mongoose from 'mongoose'
const { Schema } = mongoose;
const ApuestaSchema = new Schema({
    apuestaNumero: {
        type: Number, required: true
    },
    apuestaMonto: {
        type: Number, required: true
    },
    apuestaReventado: {
        type: Number, required: true
    },
    apuestaDate: { type: Date, default: Date.now }
});
export default mongoose.model('Apuesta', ApuestaSchema)
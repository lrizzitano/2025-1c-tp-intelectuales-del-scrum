import mongoose from 'mongoose';
import { Usuario } from '../Usuario.js';
import { TipoUsuario } from '../enums/TipoUsuario.js';

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    tipo: {
        type: Number,
        enum: TipoUsuario,
        required: true
    }
}, {
    timestamps: true,
    collection: 'usuarios'
});

usuarioSchema.loadClass(Usuario);

export const UsuarioModel = mongoose.model('Usuario', usuarioSchema);
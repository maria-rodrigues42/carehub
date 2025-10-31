// /models/Usuario.ts

import mongoose, { Schema, Document, model } from 'mongoose';

// MUDANÇA AQUI
export interface IUsuario extends Document {
  nome: string;
  email: string;
  passwordHash: string;
  pacientes?: mongoose.Types.ObjectId[];
}

// MUDANÇA AQUI
const UsuarioSchema: Schema = new Schema(
  {
    nome: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    passwordHash: { 
      type: String, 
      required: true 
    },
    pacientes: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'Paciente' // <--- IMPORTANTE! Isso força seu próximo model a se chamar 'Paciente'
      }
    ]
  },
  {
    timestamps: true 
  }
);

// MUDANÇA AQUI (nome do modelo e da constante)
export const Usuario = model<IUsuario>('Usuario', UsuarioSchema);
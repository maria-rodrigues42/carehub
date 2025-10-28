// /models/Paciente.ts

import mongoose, { Schema, Document, model } from 'mongoose';

// MUDANÇA: Interface em Português
export interface IPaciente extends Document {
  nome: string;
  dataNascimento?: Date;
  fotoUrl?: string;
  condicoesMedicas?: string;
  cuidadores: mongoose.Types.ObjectId[];
}

// MUDANÇA: Schema em Português
const PacienteSchema: Schema = new Schema(
  {
    nome: { 
      type: String, 
      required: true 
    },
    dataNascimento: { 
      type: Date,
      required: false
    },
    fotoUrl: { 
      type: String,
      required: false 
    },
    condicoesMedicas: { 
      type: String,
      required: false 
    },
    cuidadores: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'User' // <-- Isso ainda aponta para o seu 'User.ts', o que está correto.
      }
    ]
  },
  {
    timestamps: true 
  }
);

// MUDANÇA: Exportação do Model em Português
export const Paciente = model<IPaciente>('Paciente', PacienteSchema); 
// O nome 'Paciente' aqui é o mais importante!
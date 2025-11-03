// /models/Remedio.ts

// 1. Importar o que precisamos do Mongoose
import mongoose, { Schema, Document, model } from 'mongoose';

// 2. [TypeScript] Definir uma "Interface"
// Isso diz ao TypeScript como um documento de Remédio se parece
export interface IRemedio extends Document {
  paciente_id: mongoose.Types.ObjectId; // Link para o Paciente
  nome: string;
  dosagem?: string;
  frequencia?: string;
  instrucoes?: string;
  estoque?: number;
  ativo: boolean; // Para sabermos se é um remédio de uso atual ou antigo
}

// 3. [Mongoose] Definir o "Schema"
// Isso diz ao Mongoose quais são as regras para salvar no MongoDB
const RemedioSchema: Schema = new Schema(
  {
    // O link para "quem" é este remédio
    paciente_id: { 
      type: Schema.Types.ObjectId, 
      ref: 'Paciente', // <-- IMPORTANTE: Referência ao seu modelo 'Paciente'
      required: true 
    },
    nome: { 
      type: String, 
      required: true // Ex: "Paracetamol"
    },
    dosagem: { 
      type: String, 
      required: false // Ex: "500mg"
    },
    frequencia: { 
      type: String, 
      required: false // Ex: "A cada 8 horas"
    },
    instrucoes: { 
      type: String, 
      required: false // Ex: "Tomar junto com a refeição"
    },
    estoque: { 
      type: Number, 
      default: 0 
    },
    ativo: { 
      type: Boolean, 
      default: true // O remédio começa como "ativo"
    }
  },
  {
    // Adiciona automaticamente os campos: createdAt e updatedAt
    timestamps: true 
  }
);

// 4. Exportar o "Model"
// Isso cria a coleção "remedios" (plural automático) no seu banco
export const Remedio = model<IRemedio>('Remedio', RemedioSchema);
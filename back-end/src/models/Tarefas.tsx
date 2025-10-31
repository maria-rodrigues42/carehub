// /models/Task.js

{
  // O link para "quem" é esta tarefa
  patient_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient',
    required: true 
  },
  
  // O link para "quem" criou ou é responsável
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  
  titulo: { type: String, required: true }, // Ex: "Dar banho", "Passeio no parque"
  
  tipo: { 
    type: String, 
    enum: ['medicação', 'higiene', 'alimentação', 'atividade', 'outro'],
    default: 'outro'
  },
  
  // Você pediu "data" e "horario". Guarde os dois juntos!
  dataHora: { type: Date, required: true },
  
  // Você pediu "concluída ou n"
  concluida: { type: Boolean, default: false },
  
  observacoes: { type: String } // Notas que o cuidador pode adicionar
}
// /models/Article.js

{
  titulo: { type: String, required: true },
  subtitulo: { type: String },
  categoria: { type: String, required: true }, // Ex: "Saúde Mental", "Nutrição"
  
  // O corpo do artigo. Pode ser um texto longo.
  // Você pode salvar em Markdown ou HTML.
  conteudo: { type: String, required: true },
  
  imagemUrl: { type: String, required: true }, // Imagem de capa
  autor: { type: String, default: "Equipe CareHub" },
  dataPublicacao: { type: Date, default: Date.now }
}
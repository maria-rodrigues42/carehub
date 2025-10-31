import { StyleSheet, Dimensions } from 'react-native';
// Importando as cores que você definiu
import { Cores } from '../constantes/Cores';

const { width } = Dimensions.get('window');

// Exportamos o objeto 'Styles' que contém todas as nossas regras de estilo
export const Styles = StyleSheet.create({
  // Estilo principal da tela
  screenContainer: {
    flex: 1,
    backgroundColor: Cores.branco,
    height: 720
  },

  // --- Estilos do Cabeçalho (Header) ---
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, // Um padding superior seguro para iOS e Android
    paddingBottom: 16,
    backgroundColor: Cores.branco,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Cores.primaria,
  },

  // --- Estilos do Card "Clube CareHub" ---
  clubeCardContainer: {
    margin: 20,
    borderRadius: 16,
    // Sombra para Android
    elevation: 5,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  clubeCardBackground: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden', // Garante que a imagem respeite as bordas
  },
  clubeCardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Escurece a imagem de fundo
    padding: 24,
  },
  clubeCardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Cores.branco,
    marginBottom: 4,
  },
  clubeCardSubtitle: {
    fontSize: 16,
    color: Cores.branco,
    marginBottom: 16,
  },
  clubeCardButton: {
    backgroundColor: Cores.destaque,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  clubeCardButtonText: {
    color: Cores.branco,
    fontWeight: 'bold',
    fontSize: 14,
  },
  clubeFeaturesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap', // Permite que os itens quebrem a linha em telas menores
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    color: Cores.branco,
    marginLeft: 8,
    fontSize: 12,
  },

  // --- Estilos do Cabeçalho da Seção ---
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Cores.preto,
  },

  // --- Estilos do Card Vazio (Empty State) ---
  emptyCard: {
    backgroundColor: Cores.branco,
    borderRadius: 12,
    padding: 32,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0', // Uma borda suave
  },
  emptyCardText: {
    fontSize: 16,
    color: Cores.secundaria,
    textAlign: 'center',
    marginBottom: 16,
  },
  emptyCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Cores.primaria + '20', // Usa a cor primária com 20% de opacidade
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  emptyCardButtonText: {
    color: Cores.primaria,
    fontWeight: 'bold',
    fontSize: 14,
  },

  textoNormal:{
    color: Cores.preto,
    fontWeight: 'bold',
    fontSize: 18,
  },

  //--------------tela remedios

  //view da data d remedio
  viewData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
  },

  cardRemedioText:{
    flex:1,
    flexDirection: "column",

  },

  cardRemedio:{
    flex:1,
    flexDirection: "row",
    gap: 15,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Cores.secundaria,
    margin: 15,
    backgroundColor: Cores.fundo

  },
  
  plusButton:{
    position: "absolute",
    backgroundColor: Cores.primaria,
    borderRadius: 50,
    padding: 10,
    width: 55,
    //posicao absoluta
    right: 15,
    bottom: -500
    
  }




});


import { StyleSheet, Dimensions, ImageStyle, ViewStyle, TextStyle } from "react-native";
import {Cores} from '../constantes/Cores';


// Pegamos a altura da tela para calcular o tamanho do banner
const { height } = Dimensions.get('window');

// Definimos uma "interface" para nossos estilos.
// Isso ajuda o TypeScript a saber quais estilos existem e autocompletar para você.
interface HomeStyles {
  screenContainer: ViewStyle;
  header: ViewStyle;
  logo: ImageStyle;
  mainContent: ViewStyle;
  bannerContainer: ViewStyle;
  bannerBackground: ImageStyle;
  bannerOverlay: ViewStyle;
  bannerTitle: TextStyle;
  bannerButton: ViewStyle;
  bannerButtonText: TextStyle;
  sectionTitle: TextStyle;
  card: ViewStyle;
  cardIcon: ViewStyle;
  cardText: TextStyle;
  cardLink: TextStyle;
}

// Criamos e exportamos os estilos para que a tela possa usá-los.
export default StyleSheet.create<HomeStyles>({
  screenContainer: {
    flex: 1,
    backgroundColor: Cores.fundo,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Cores.branco,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  bannerContainer: {
    height: height * 0.25,
    backgroundColor: Cores.primaria,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  bannerBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Cores.branco,
    maxWidth: '70%',
  },
  bannerButton: {
    backgroundColor: Cores.destaque,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: Cores.branco,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a202c', // Usando a cor diretamente ou pode adicionar ao seu `Cores.ts`
    marginBottom: 16,
  },
  card: {
    backgroundColor: Cores.branco,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardText: {
    color: '#718096',
    marginBottom: 8,
  },
  cardLink: {
    color: Cores.primaria,
    fontWeight: 'bold',
  },
});








/*
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Cores.fundo,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: Cores.fundo,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Cores.primaria,
  },
  clubeCardContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  clubeCardBackground: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  clubeCardOverlay: {
    backgroundColor: 'rgba(0, 70, 150, 0.85)',
    padding: 20,
    alignItems: 'center',
  },
  clubeCardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Cores.branco,
    letterSpacing: 1,
  },
  clubeCardSubtitle: {
    fontSize: 14,
    color: Cores.branco,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  clubeCardButton: {
    backgroundColor: '#e53e8f', // Cor rosa do exemplo
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 20,
  },
  clubeCardButtonText: {
    color: Cores.branco,
    fontSize: 14,
    fontWeight: 'bold',
  },
  clubeFeaturesContainer: {
    width: '100%',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    color: Cores.branco,
    fontSize: 14,
    marginLeft: 10,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Cores.primaria,
  },
  emptyCard: {
      backgroundColor: Cores.branco,
      borderRadius: 12,
      padding: 30,
      marginHorizontal: 20,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Cores.destaque,
  },
  emptyCardText: {
      fontSize: 16,
      color: Cores.secundaria,
      marginBottom: 15,
  },
  emptyCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f0ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  emptyCardButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Cores.primaria,
  },
});

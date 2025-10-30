import { StyleSheet, Dimensions } from 'react-native';
// Importando as cores que você definiu
import { Cores } from '../constantes/Cores';

const { width } = Dimensions.get('window');

// Exportamos o objeto 'Styles' que contém todas as nossas regras de estilo
export const Styles = StyleSheet.create({
  // Estilo principal da tela
  cardRemedioContainer: {
    flex: 1,
    backgroundColor: Cores.branco,
  },

});


import { StyleSheet, Dimensions } from 'react-native';
import { Cores } from '../constantes/Cores';
import { Columns } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',                                                                                               
    
    backgroundColor: Cores.branco,

  },
  headerImage: {
    width: width,
    height: height * 0.4,
    resizeMode: 'cover',
    // Posição negativa para cobrir a tela inteira no topo
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Cores.preto,
    marginTop: height * 0.4 + 20, // Pular a imagem
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: Cores.preto,
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    color: Cores.preto,
  },
  // Espaçador para empurrar os botões para baixo
  flexSpacer: {

  },
  primaryButton: {
    backgroundColor: Cores.primaria,
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: Cores.preto,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: Cores.secundaria,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

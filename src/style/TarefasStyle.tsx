import { StyleSheet } from 'react-native';
// Importando as cores que você definiu
import { Cores } from '../constantes/Cores';

// Exportamos o objeto 'Styles' que contém todas as nossas regras de estilo
export const TarefasStyle = StyleSheet.create({
    viewData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    }

})
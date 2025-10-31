/**
 * AppNavigator.tsx
 *
 * Gerencia a navegação principal (barra de abas) e renderiza a tela ativa.
 */
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Home, NotepadText, Pill, Newspaper, Album } from 'lucide-react-native';

// 1. IMPORTAÇÃO DE TODAS AS PEÇAS
// Importamos nossas cores, ícones e, o mais importante, todas as telas que criamos.
import { Cores } from '../constantes/Cores';
import HomeTela from '../telas/HomeTela';
<<<<<<< HEAD
import { TarefasTela } from '../telas/TarefasTela';
import { RemediosTela } from '../telas/RemediosTela';
import { ConteudoTela } from '../telas/ConteudoTela';
=======
import TarefasTela from '../telas/TarefasTela';
import RemediosTela from '../telas/RemediosTela';
import ConteudoTela from '../telas/ConteudoTela';
import DiarioTela from '../telas/DiarioTela';
>>>>>>> master

type ScreenName = 'Início' | 'Tarefas' | 'Remedios' | 'Artigos' | 'Diario';

const AppNavigator: React.FC = () => {
  // 2. A MEMÓRIA DO COMPONENTE (useState)
  const [activeScreen, setActiveScreen] = useState<ScreenName>('Início');

  // 3. O SELECIONADOR DE TELAS (Renderização Condicional)
  const renderScreen = () => {
    switch (activeScreen) {
      case 'Início':
        return <HomeTela />;
      case 'Tarefas':
        return <TarefasTela />;
      case 'Remedios':
        return <RemediosTela />;
      case 'Artigos':
        return <ConteudoTela />;
<<<<<<< HEAD
=======
      case 'Diario':
        return <DiarioTela />;
>>>>>>> master
      default:
        return <HomeTela />;
    }
  };

  // 4. A ESTRUTURA VISUAL (O que é desenhado na tela)
  return (
    <SafeAreaView style={styles.containerPrincipal}>
      <View style={styles.conteudoDaTela}>
        {renderScreen()}
      </View>

      <View style={styles.barraNavegacao}>
        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Início')}>
<<<<<<< HEAD
          <Home color={activeScreen === 'Início' ? Cores.primaria : Cores.primaria} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Início' ? Cores.primaria : Cores.primaria }]}>Início</Text>
        </TouchableOpacity>

        {/* Corrigido: usar 'Tarefas' (existente em ScreenName) */}
        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Tarefas')}>
          <NotepadText color={activeScreen === 'Tarefas' ? Cores.primaria : Cores.primaria} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Tarefas' ? Cores.primaria : Cores.primaria }]}>Tarefas</Text>
        </TouchableOpacity>

        {/* Corrigido: usar 'Remedios' (existente em ScreenName) */}
        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Remedios')}>
          <Pill color={activeScreen === 'Remedios' ? Cores.primaria : Cores.primaria} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Remedios' ? Cores.primaria : Cores.primaria }]}>Remédios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Artigos')}>
          <Newspaper color={activeScreen === 'Artigos' ? Cores.primaria : Cores.primaria} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Artigos' ? Cores.primaria : Cores.primaria }]}>Artigos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Perfil')}>
          <User color={activeScreen === 'Perfil' ? Cores.primaria : Cores.primaria} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Perfil' ? Cores.primaria : Cores.primaria }]}>Perfil</Text>
=======
          <Home color={activeScreen === 'Início' ? Cores.primaria : Cores.preto} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Início' ? Cores.primaria : Cores.preto }]}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Tarefas')}>
          <NotepadText color={activeScreen === 'Tarefas' ? Cores.primaria : Cores.preto} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Tarefas' ? Cores.primaria : Cores.preto }]}>Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Remedios')}>
          <Pill color={activeScreen === 'Remedios' ? Cores.primaria : Cores.preto} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Remedios' ? Cores.primaria : Cores.preto }]}>Remedios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Artigos')}>
          <Newspaper color={activeScreen === 'Artigos' ? Cores.primaria : Cores.preto} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Artigos' ? Cores.primaria : Cores.preto }]}>Artigos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNav} onPress={() => setActiveScreen('Perfil')}>
          <Album color={activeScreen === 'Diario' ? Cores.primaria : Cores.preto} />
          <Text style={[styles.textoBotaoNav, { color: activeScreen === 'Diario' ? Cores.primaria : Cores.preto }]}>Diario</Text>
>>>>>>> master
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// 5. OS ESTILOS
const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: Cores.fundo,
  },
  conteudoDaTela: {
    flex: 1,
  },
  barraNavegacao: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: Cores.branco,
    justifyContent: 'space-around',
<<<<<<< HEAD
    borderTopWidth: 1,
    borderTopColor: Cores.destaque,
    paddingBottom: 8, // substituído 5vh por valor numérico válido
=======
    borderTopWidth: 0,
    borderTopColor: Cores.secundaria,
    marginBottom: 0
>>>>>>> master
  },
  botaoNav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoNav: {
    fontSize: 12,
    marginTop: 4,
  }
});

export default AppNavigator;

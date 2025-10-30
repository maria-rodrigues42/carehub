import React from "react";//para a sintaxe
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground} from "react-native";//importando os componentes que vamos usar na tela
//pg de estilo, paragrafo, div, div q da pra descer, area de toque, imagem

import { Menu, Percent, Truck, CalendarClock, Camera, PlusCircle } from 'lucide-react-native';


//importar as cores que definimos
import {Cores} from '../constantes/Cores';
import {Styles} from '../style/HomeStyle';


//mesmo nome do arquivo, tipo o uma funcao construtora de java
//Home e a funcao q vai exibir a p[agina home, ent o return dela vai ter tudo q ela vai mostrar, como uma pagina em html
const Home: React.FC = function(){

    // Componente para o cabeçalho da tela
  const Header = () => (
    <View style={Styles.headerContainer}>
      <TouchableOpacity>
        <Menu color={Cores.primaria} />
      </TouchableOpacity>
      <Text style={Styles.headerTitle}>CareHub</Text>
      <View style={{ width: 28 }} />
    </View>
  );

  // Componente para o banner principal (Clube CareHub)
  const ClubeCareHubCard = () => (
    <View style={Styles.clubeCardContainer}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1576765608866-5b518682c379?q=80&w=1974&auto=format&fit=crop' }}
        style={Styles.clubeCardBackground}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={Styles.clubeCardOverlay}>
          <Text style={Styles.clubeCardTitle}>CLUBE CAREHUB</Text>
          <Text style={Styles.clubeCardSubtitle}>MAIS PRATICIDADE E ECONOMIA PARA VOCÊ!</Text>
          <TouchableOpacity style={Styles.clubeCardButton}>
            <Text style={Styles.clubeCardButtonText}>ATIVE AGORA E APROVEITE</Text>
          </TouchableOpacity>
          <View style={Styles.clubeFeaturesContainer}>
            <View style={Styles.featureItem}>
              <Percent color={Cores.branco} size={18} />
              <Text style={Styles.featureText}>Descontos exclusivos</Text>
            </View>
            <View style={Styles.featureItem}>
              <Truck color={Cores.branco} size={18} />
              <Text style={Styles.featureText}>Frete grátis parceiro</Text>
            </View>
            <View style={Styles.featureItem}>
              <CalendarClock color={Cores.branco} size={18} />
              <Text style={Styles.featureText}>Receba com recorrência</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

   // Componente para o cabeçalho de uma seção
  const SectionHeader = ({ title }: { title: string }) => (
    <View style={Styles.sectionHeaderContainer}>
      <Text style={Styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Camera color={Cores.secundaria} size={24} />
      </TouchableOpacity>
    </View>
  );

  // Componente para o card de "estado vazio"
  const EmptyMedicationCard = () => (
    <View style={Styles.emptyCard}>
        <Text style={Styles.emptyCardText}>Sem cuidados para exibir</Text>
        <TouchableOpacity style={Styles.emptyCardButton}>
            <PlusCircle color={Cores.primaria} size={18} style={{marginRight: 8}}/>
            <Text style={Styles.emptyCardButtonText}>Cadastrar Cuidado</Text>
        </TouchableOpacity>
    </View>
  );


    return(
        <ScrollView style={Styles.screenContainer} showsVerticalScrollIndicator={false}>
        <Header />
        <SectionHeader title="Próximos Cuidados" />
        <EmptyMedicationCard />
        </ScrollView>
    );
}




export default Home;
// React.FC significa "Functional Component". É a forma de dizer ao TypeScript
// que esta função é um componente React.
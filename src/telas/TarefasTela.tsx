import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

import { Menu, Percent, Truck, CalendarClock, Camera, PlusCircle, ArrowLeft, ArrowRight } from 'lucide-react-native';

//importando os estilo
import {Cores} from '../constantes/Cores';
import {Styles} from '../style/HomeStyle';
import {TarefasStyle} from '../style/TarefasStyle';

const TarefasTela: React.FC = function(){

    const Header = () => (
    <View style={Styles.headerContainer}>
      <TouchableOpacity>
        <Menu color={Cores.primaria} />
      </TouchableOpacity>
      <Text style={Styles.headerTitle}>Remedios</Text>
      <View style={{ width: 28 }} />
    </View>
  );

  //data da lista
  const CardData = () => (
    <View style={TarefasStyle.viewData}>
        <TouchableOpacity><ArrowLeft /></TouchableOpacity>
        <Text>Hoje - 22 de Outubro</Text>
        <TouchableOpacity><ArrowRight /></TouchableOpacity>
    </View>
  )

  // Componente para o banner principal (Clube CareHub)
  const CardListaRemedio = () => (
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
            <CardData />
            <CardListaRemedio />
            <SectionHeader title="Próximos Cuidados" />
            <EmptyMedicationCard />
        </ScrollView>
    );

}

export default TarefasTela;
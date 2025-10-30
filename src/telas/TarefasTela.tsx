import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { Checkbox } from '@futurejj/react-native-checkbox';


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
      <Text style={Styles.headerTitle}>Tarefas</Text>
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

  

    //use state para se tiver remedios
  const [temRemedio, setRemedio] = useState(0);

  if(temRemedio){
    var titulo = "Medicamentos para Hoje";
  }else{
    var titulo = "Nao ha Medicamentos para hoje";
  }


   // Componente para o cabeçalho de uma seção
  const SectionHeader = ({ title }: { title: string }) => (
    <View style={Styles.sectionHeaderContainer}>
      <Text style={Styles.sectionTitle}>{title}</Text>
      
    </View>
  );

  // Componente para o banner principal (Clube CareHub)
  const CardListaRemedio = () => (
    <View style={Styles.clubeCardContainer}>
    <Text>{hora_remedio}</Text>
    <Text>{nome_remedio}</Text>

    </View>
  );

  


    return(
        <ScrollView style={Styles.screenContainer} showsVerticalScrollIndicator={false}>
            <Header />
            <CardData />
            <CardListaRemedio />
            <SectionHeader title={titulo} />
            
        </ScrollView>
    );

}

export default TarefasTela;
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { Checkbox } from '@futurejj/react-native-checkbox';
import { Plus } from 'lucide-react-native';


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
  const [temTarefas, setTarefas] = useState(0);

  if(temTarefas){
    var titulo = "Tarefas para Hoje";
  }else{
    var titulo = "Nao ha Tarefas para hoje";
  }


   // Componente para o cabeçalho de uma seção
  const SectionHeader = ({ title }: { title: string }) => (
    <View style={Styles.sectionHeaderContainer}>
      <Text style={Styles.sectionTitle}>{title}</Text>
      
    </View>
  );


  const ButtonAddRemedio = () =>(
    <TouchableOpacity style={Styles.plusButton}>
      <Plus size={35}/>
    </TouchableOpacity>
  )
  


    return(
        <ScrollView style={Styles.screenContainer} showsVerticalScrollIndicator={false}>
            <Header />
            <CardData />
            <SectionHeader title={titulo} />
            <ButtonAddRemedio />
            
        </ScrollView>
    );

}

export default TarefasTela;
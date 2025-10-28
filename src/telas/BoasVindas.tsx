import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {Image } from 'expo-image';
// Vamos precisar dos estilos para esta tela
import { styles } from '../style/BoasVindasStyle';
import { Cores } from '../constantes/Cores';

// A tela recebe uma propriedade 'onComplete' que é uma função
// para ser chamada quando o cadastro terminar.
type Props = {
  onComplete: () => void;
};

const OnboardingFlow: React.FC<Props> = ({ onComplete }) => {
  // Criamos um estado para controlar em qual etapa do cadastro estamos
  const [step, setStep] = useState(1);

  // Componente da Etapa 1: Boas-vindas (baseado na sua imagem)
  const WelcomeStep = () => (
    <View style={styles.pageContainer}>
      <Image
        style={styles.pageContainer}
        source="../images/bandaid-heart.webp"
      />
      <Text style={styles.title}>Boas-vindas.</Text>
      <Text style={styles.subtitle}>
        Cuidar é um gesto de amor. Conecte quem cuida para oferecer mais
        atenção, segurança e afeto no dia a dia.
      </Text>
      <View style={styles.flexSpacer} />
      <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(2)}>
        <Text style={styles.buttonText}>Começar Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton} onPress={onComplete}>
        <Text style={styles.secondaryButtonText}>Pular (Modo Visitante)</Text>
      </TouchableOpacity>
    </View>
  );

  // Componente da Etapa 2: Cadastro do Cuidador
  const RegisterUserStep = () => (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Seu Cadastro</Text>
      <Text style={styles.subtitle}>Primeiro, vamos criar a sua conta.</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Seu nome completo"
        placeholderTextColor="#443535ff"
      />
      <TextInput
        style={styles.input}
        placeholder="Seu melhor email"
        keyboardType="email-address"
        placeholderTextColor="#443535ff"
      />
      <TextInput
        style={styles.input}
        placeholder="Crie uma senha"
        secureTextEntry
        placeholderTextColor="#443535ff"
      />

      <View style={styles.flexSpacer} />
      <TouchableOpacity style={styles.primaryButton} onPress={() => setStep(3)}>
        <Text>Próximo Passo</Text>
      </TouchableOpacity>
    </View>
  );

  // Componente da Etapa 3: Cadastro da Pessoa Cuidada
  const RegisterPatientStep = () => (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Quem será cuidado?</Text>
      <Text style={styles.subtitle}>Agora, cadastre os dados da pessoa que você irá cuidar.</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome da pessoa"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (DD/MM/AAAA)"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Alergias (opcional)"
        placeholderTextColor="#999"
      />

      <View style={styles.flexSpacer} />
      {/* Ao clicar neste botão, chamamos a função 'onComplete'.
        Isso vai avisar o App.tsx que o cadastro terminou,
        e o App.tsx vai mudar o estado 'isAuthenticated' para 'true'.
      */}
      <TouchableOpacity style={styles.primaryButton} onPress={onComplete}>
        <Text style={styles.buttonText}>Concluir e Entrar no App</Text>
      </TouchableOpacity>
    </View>
  );

  // Renderiza a etapa correta com base no estado 'step'
  switch (step) {
    case 1:
      return <WelcomeStep />;
    case 2:
      return <RegisterUserStep />;
    case 3:
      return <RegisterPatientStep />;
    default:
      return <WelcomeStep />;
  }
};

export default OnboardingFlow;

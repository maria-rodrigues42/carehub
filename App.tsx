
import React from 'react'; // importamos o React pois estamos usando a sintaxe para typescypt xml, ai la tem tudo certinho pro programa entender
import AppNavigator from './src/navigation/AppNavigator';
//nosso navegador entre as telas do nosso aplicativo 
//ele e como um seletor da tela q vai ficar ativa


export default function App() {//nossa funcao principal (como o index do react)
  //app so pode retornar um componente a ser exibido (e oq vai mostrar na tela)
  //nesse caso ele vai retornar (apontar) para o nosso navegador que ficara trocando entre as telas
  return (
    <AppNavigator />//aqui estamos cumprindo a regra retornando um so componente
  );
}


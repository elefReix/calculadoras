import React from 'react';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { SafeAreaView,  StatusBar} from 'react-native';

export const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={'light-content'}/>
      <CalculadoraScreen/>
    </SafeAreaView>
  );
};
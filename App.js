import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import ButtonCalc from './src/components/ButtonCalc';
import Display from './src/components/Display';


export default function App() {
  const [displayValue,setDisplayValue] = useState('0')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <ButtonCalc label='AC'/>
        <ButtonCalc label='/'/>
        <ButtonCalc label='7'/>
        <ButtonCalc label='8'/>
        <ButtonCalc label='9'/>
        <ButtonCalc label='*'/>
        <ButtonCalc label='4'/>
        <ButtonCalc label='5'/>
        <ButtonCalc label='6'/>
        <ButtonCalc label='-'/>
        <ButtonCalc label='1'/>
        <ButtonCalc label='2'/>
        <ButtonCalc label='3'/>
        <ButtonCalc label='+'/>
        <ButtonCalc label='0'/>
        <ButtonCalc label='.'/>
        <ButtonCalc label='='/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});

import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import ButtonCalc from './src/components/ButtonCalc';
import Display from './src/components/Display';


export default function App() {
  const [displayValue, setDisplayValue] = useState('1')

  addDigit = n =>{
    setDisplayValue(n)
  }

  clearMemory = ()=>{
    setDisplayValue('0')
  }

  setOperation = operation =>{

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <ButtonCalc label='AC' triple onClick={clearMemory}/>
        <ButtonCalc label='/' operation onClick={setOperation}/>
        <ButtonCalc label='7' onClick={addDigit}/>
        <ButtonCalc label='8' onClick={addDigit}/>
        <ButtonCalc label='9' onClick={addDigit}/>
        <ButtonCalc label='*' operation onClick={setOperation}/>
        <ButtonCalc label='4' onClick={addDigit}/>
        <ButtonCalc label='5' onClick={addDigit}/>
        <ButtonCalc label='6' onClick={addDigit}/>
        <ButtonCalc label='-' operation onClick={setOperation}/>
        <ButtonCalc label='1' onClick={addDigit}/>
        <ButtonCalc label='2' onClick={addDigit}/>
        <ButtonCalc label='3' onClick={addDigit}/>
        <ButtonCalc label='+' operation onClick={setOperation}/>
        <ButtonCalc label='0' double onClick={addDigit}/>
        <ButtonCalc label='.' onClick={addDigit}/>
        <ButtonCalc label='=' operation onClick={setOperation}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import ButtonCalc from './src/components/ButtonCalc';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: 'false',
  operation: null,
  values: [0, 0],
  current: 0
}

export default function App() {
  const [calcState, setCalcState] = useState(initialState)

  addDigit = n => {

    const clearDisplay = calcState.displayValue === '0' || calcState.clearDisplay
    
    if (n === '.' && !clearDisplay && calcState.displayValue.includes('.')) {
      return
    }

    const currentValue = clearDisplay ? '' : calcState.displayValue
    const displayValue = currentValue + n

    setCalcState(state => ({
      ...state,
      displayValue,
      clearDisplay: false
    }))

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...calcState.values]
      values[calcState.current] = newValue
      setCalcState(state=>({
        ...state,
        values: values
      }))
    }
  }

  clearMemory = () => {
    setCalcState({...initialState})
  }

  setOperation = operation => {
    if(calcState.current === 0){
      setCalcState(state=>({
        ...state,
        operation: operation,
        current:1,
        clearDisplay: true
      }))
    } else{
      const equals = operation ==='='
      const values = [...calcState.values]
      try{
        values[0] = eval(`${values[0]} ${calcState.operation} ${values[1]}`)
      } catch (e){
        values[0] = calcState.values[0]
      }

      values[1] = 0
      setCalcState(state=>({
        ...state,
        displayValue: `${values[0]}`,
        operation: equals? null : operation,
        clearDisplay: !equals,
        values
      }))
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Display value={calcState.displayValue} />
      <View style={styles.buttons}>
        <ButtonCalc label='AC' triple onClick={clearMemory} />
        <ButtonCalc label='/' operation onClick={setOperation} />
        <ButtonCalc label='7' onClick={addDigit} />
        <ButtonCalc label='8' onClick={addDigit} />
        <ButtonCalc label='9' onClick={addDigit} />
        <ButtonCalc label='*' operation onClick={setOperation} />
        <ButtonCalc label='4' onClick={addDigit} />
        <ButtonCalc label='5' onClick={addDigit} />
        <ButtonCalc label='6' onClick={addDigit} />
        <ButtonCalc label='-' operation onClick={setOperation} />
        <ButtonCalc label='1' onClick={addDigit} />
        <ButtonCalc label='2' onClick={addDigit} />
        <ButtonCalc label='3' onClick={addDigit} />
        <ButtonCalc label='+' operation onClick={setOperation} />
        <ButtonCalc label='0' double onClick={addDigit} />
        <ButtonCalc label='.' onClick={addDigit} />
        <ButtonCalc label='=' operation onClick={setOperation} />
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

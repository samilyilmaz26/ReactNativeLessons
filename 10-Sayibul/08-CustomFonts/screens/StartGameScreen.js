import { useState } from 'react';
import { TextInput, View, StyleSheet,Alert } from 'react-native';
import Colors from '../utils/colors';
import PrimaryButton from '../components/PrimaryButton';
 //step 1
function StartGameScreen(props) {
 
  const  [number,setNumber]= useState("")
  function changeText(number) {
    setNumber(number)
    
  }
  function reset() {
    setNumber('')
    
  }
 
  function confirm() {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: reset }]
      );
      return;
    }
 //step 1
   props.checkumber(chosenNumber)
  }
  return (
    <View style={styles.InputContainer}>
      <TextInput style={styles.NumberInput} 
      maxLength={2} 
      keyboardType='number-pad'
      autoCapitalize='none'
      autoCorrect = {false}
      onChangeText={changeText}
      value = {number}
       />

      
      <View style={styles.buttonsContainer}>
     
        <View style={styles.buttonContainer}>
          <PrimaryButton press={reset} >Reset</PrimaryButton>
        </View  >
 
        <View style={styles.buttonContainer}>
          <PrimaryButton press={confirm} >Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  InputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // yukardaki ikili beraber kullanılmalı
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: Colors.purple500,
    borderRadius: 8,
    elevation: 7,
  },
  NumberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow500,
    borderBottomWidth: 2,
    color: Colors.yellow500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  buttonsContainer: {
    flexDirection: 'row'
  },
 
  buttonContainer: {
    flex: 1
  },
})
//step 1

import { Text, StyleSheet, View, SafeAreaView,Button } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import GuessContainer from "../components/GuessContainer";
import PrimaryButton from "../components/PrimaryButton";
let max = 100;
let min = 1;
export default function GameScreen() {
 
  function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const initialGuess = generateRandom(min, max);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuess(direction) {
   
  
    if (direction === "lower") {
      max = currentGuess;
       
      console.log (currentGuess,direction, min, max)
     
    } else {
      min = currentGuess
     
      
    console.log (currentGuess,direction, min, max)
    } 
    const newNumber = generateRandom(min, max);
    
    setCurrentGuess(newNumber);
  }
  
  return (
    <View style={styles.screen}>
      <View>
        <Title>Guess</Title>
        <GuessContainer>{currentGuess}</GuessContainer>
        <View>
        
          <PrimaryButton  press={nextGuess.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton  press={nextGuess.bind(this, 'greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 27,
  },
});

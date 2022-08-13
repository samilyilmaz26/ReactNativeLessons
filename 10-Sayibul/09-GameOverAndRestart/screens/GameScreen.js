//step 1

import { Text, StyleSheet, View, SafeAreaView,Button } from "react-native";
import React, { useState,useEffect } from "react";
import Title from "../components/Title";
import GuessContainer from "../components/GuessContainer";
import PrimaryButton from "../components/PrimaryButton";
import {Ionicons,FontAwesome} from '@expo/vector-icons'

let max = 100;
let min = 1;
export default function GameScreen({confirmedNumber,onGameOver}) {
 
 
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
  useEffect(()=> {
    if (currentGuess === confirmedNumber) {
      onGameOver()
      // Stap 1 
      min =1,
      max = 100
    
    }
  },[currentGuess,confirmedNumber,onGameOver])
  return (
    <View style={styles.screen}>
      <View>
        <Title>Guess</Title>
        <GuessContainer>{currentGuess}</GuessContainer>
        <View>
        
          <PrimaryButton  press={nextGuess.bind(this, 'lower')}>
          <FontAwesome name="minus-circle" size={24} color="blue" />
          </PrimaryButton>
          <PrimaryButton  press={nextGuess.bind(this, 'greater')}>
          <FontAwesome name="plus-circle" size={24} color="blue" />
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

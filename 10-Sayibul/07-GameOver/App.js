import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
 
import { StyleSheet, View, Text ,ImageBackground,SafeAreaView} from "react-native";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
 
 
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  
  
  function checkumber(enteredNumber) {
   
    setConfimedNumber(enteredNumber)
   }
   function onGameOver() {
    setGameOver(true)
   }
   const [confirmedNumber, setConfimedNumber] = useState(null)
   const [gameOver, setGameOver] = useState(false)
   let screen = <StartGameScreen  checkumber= {checkumber} />
   if (confirmedNumber) {
    screen = <GameScreen 
    confirmedNumber = {confirmedNumber} onGameOver = {onGameOver} 
    /> 
   }
   if (gameOver) {
    screen = <GameOverScreen /> 
   }
   
  return (
   
    <LinearGradient colors={["blue", "yellow"]} style={styles.Container}>
       
       <ImageBackground
        source={require('./assets/images/ykb2.png')}
        resizeMode="cover"
        style={styles.Container}
        imageStyle={styles.backgroundImage}
      >
   
        {screen} 
       
      </ImageBackground>
    </LinearGradient>
     
  );
}
 
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    
  },
 
  backgroundImage: {
    opacity: 0.15
  }
});

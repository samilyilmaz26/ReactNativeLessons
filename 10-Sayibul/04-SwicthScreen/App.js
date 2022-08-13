import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
// SaveAreaView for nodge STEP 2
import { StyleSheet, View, Text ,ImageBackground,SafeAreaView} from "react-native";
import GameScreen from "./screens/GameScreen";
 
 
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  
  //1 Adım
   const [confirmedNumber, setConfimedNumber] = useState(null)
   function checkumber(enteredNumber) {
   
    setConfimedNumber(enteredNumber)
   }
   //1. Adım 
   let screen = <StartGameScreen  checkumber= {checkumber} />
   if (confirmedNumber) {
    screen = <GameScreen /> 
   
   }
 
  return (
   
    <LinearGradient colors={["blue", "yellow"]} style={styles.Container}>
       
       <ImageBackground
        source={require('./assets/images/ykb2.png')}
        resizeMode="cover"
        style={styles.Container}
        imageStyle={styles.backgroundImage}
      >
        {/* Step 1 */}
        {/* <StartGameScreen /> */}
        {/* SaveAreaView for nodge Step2  */}
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

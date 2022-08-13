import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, View, Text ,ImageBackground} from "react-native";
 
// step 4  expo install expo-linear-gradient
import StartGameScreen from "./screens/StartGameScreen";



export default function App() {
   
  return (
    //  Step   3
    //  <View  style=  {styles.Container} >
    //      <StartGameScreen></StartGameScreen>
    //   </View>
    <LinearGradient colors={["blue", "yellow"]} style={styles.Container}>
       {/* Step 5 */}
       <ImageBackground
        source={require('./assets/images/ykb2.png')}
        resizeMode="cover"
        style={styles.Container}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
     
  );
}
// Step  3
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //    Step 4
    //  backgroundColor: 'yellow'
  },
  // Step 5
  backgroundImage: {
    opacity: 0.15
  }
});

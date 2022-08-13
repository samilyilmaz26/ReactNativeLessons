//step 1

import { Text, StyleSheet ,View ,SafeAreaView } from "react-native";
import React from "react";
import Title from "../components/Title";
 
 

export default function GameScreen() {
  return (
  
    <View style= {styles.screen}>
    <View >
       <Title>Guess</Title>
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

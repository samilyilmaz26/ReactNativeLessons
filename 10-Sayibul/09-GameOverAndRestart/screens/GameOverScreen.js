import React from "react";
import { View, Text, Image } from "react-native";
import Title from "../components/Title";
import PrimaryButton from '../components/PrimaryButton'
export default function GameOverScreen({
  confirmedNumber,
  startNewGame,
}) {
  return (
    <View>
      <View>
        <Title>Game Over</Title>
        {/* <Image source ={require('../assets/images/favicon.png')}/> */}
      </View>
      <View>
        <Text>
          guessNumber<Text>{confirmedNumber}</Text>
        </Text>
      </View>
      <PrimaryButton press= {startNewGame}>New Game</PrimaryButton>
    </View>
  );
}

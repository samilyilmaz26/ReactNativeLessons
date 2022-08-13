import { StyleSheet ,View,Text} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
  //  Step   3  
 <View  style=  {styles.Container} >
     <StartGameScreen></StartGameScreen>
  </View>
  ) 
}
// Step  3
const styles = StyleSheet.create({
  Container: {
    flex: 1,
   backgroundColor: 'yellow'
  },
  
}) 

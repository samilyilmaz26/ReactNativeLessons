import { View, Text, Pressable,StyleSheet } from 'react-native';
import Colors from '../utils/colors';
function PrimaryButton({ children ,press}) {
  // Step 6
  return (
    <Pressable onPress={press} android_ripple={{color: Colors.red500}}>
      <View style= {styles.container}>
        <Text style= {styles.buttoncontainer}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.yellow500,
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
    margin:4

  },
  buttoncontainer: {
    color: Colors.blue500,
    textAlign: 'center',
    
  }
})

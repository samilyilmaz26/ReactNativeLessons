import { View, Text, Pressable,StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
  function pressManage() {
    console.log('presses !')
  }
  return (
    <Pressable onPress={pressManage} android_ripple={{color:'red'}}>
      <View style= {styles.container}>
        <Text style= {styles.buttoncontainer}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor:'yellow',
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:2,
    margin:4

  },
  buttoncontainer: {
    color:'blue',
    textAlign: 'center',
    
  }
})

import  {Text,StyleSheet,View} from 'react-native'
import Colors  from   '../utils/colors'

export default function GuessContainer({children}) {
  return (
    <View style={styles.container}>
    <Text style= {styles.guessNumber}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow500,
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    guessNumber: {
        color: Colors.yellow500,
        fontSize:36,
        fontWeight: 'bold'
    }

})
    
 
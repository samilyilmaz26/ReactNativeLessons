import { Text ,StyleSheet} from "react-native"
 

export default function Title({children}) {
  return (
   
    <Text style= {styles.title} >{children}</Text>
  
  )
}
const styles = StyleSheet.create({
     
    title: {
      fontSize: 27,
      fontWeight: 'bold',
      color:'yellow',
      textAlign:'center',
      borderWidth:2,
      borderColor: 'yellow',
      padding:12
    }
  });
  

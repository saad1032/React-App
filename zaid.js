/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function zaid() {
return(
    
    <view style={styles.container1}>

     <view style={styles.container2}>
      <Text>QURAN APP</Text>

      <image source={require('./my-icon.png')}/>
      <Statusbar styles="auto"></Statusbar>
      

     </view>

    </view>
)

const styles = StyleSheet.create({


  container1: {
    flex: 1,
      
    
    
    
  },
}

*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function zaid() {

  return (
    <View style={styles.container}>

    <View style={styles.container1}>
      <Text style={styles.text1} >Test 1</Text>
    </View>

    <View style={styles.container2}>
      <Text>Test 2</Text>
    </View>

    <View style={styles.container3}>
      <Text>Test 3</Text>
    </View>

    <View style={styles.container4}>
      <Text>Test 4</Text>
    </View>

    <View style={styles.container5}>
      <Text>Test 5</Text>
    </View>

    
    

</View>
    
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
      justifyContent: 'space-between',
    
    
  },

  container1: {
    alignItems:"flex-start",
    
    
    
  },
  container2: {
    alignItems:'center'
    // Styles for second View
  },
  container3: {
    alignItems:'flex-end'
    // Styles for third View
  },
  container4: {
    alignItems:'center'
    // Styles for fourth View
  },
  container5: {
    alignItems:'flex-start'
    // Styles for fifth View
  },
  text1: {  // Style for Text inside container1
    fontStyle: 'italic',
  },



}); 


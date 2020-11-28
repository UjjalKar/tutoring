// import React from 'react'
// import { View, Text, StyleSheet } from 'react-native'

// export default () => {
//   return (
//     <View style={styles.errorContainer}>
//       <Text style={styles.errorText}>Not internet connection</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   errorContainer: {
//     width: '100%',
//     padding: 10,
//     alignSelf: 'center',
//     backgroundColor: 'red',
//     position:"absolute",
//     bottom:0,
//     left:0
//   },
//   errorText : {
//     color: '#ffffff',
//     fontSize: 16,
//     textAlign: 'center'
//   }
// })




import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default () => {
  return (
    <SafeAreaView style={styles.errorContainer}>
      <Text style={styles.errorText}>Not internet connection</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  errorText : {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  }
})

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 const [cont,setCont] = useState(0)
 console.log(`primero`,cont)
  return (
    
    <View style={styles.container}>
      <Text onPress={()=>setCont(cont+1)}>Open up App.js to start working on your app!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24
  }
});

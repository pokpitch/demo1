import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={{
      backgroundColor: '#FF0', 
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch'
      }}>
      <Text style={{...styles.text, backgroundColor: 'red'}}>Stream I.T. Consulting Ltd.</Text>
      <Text style={{...styles.text, backgroundColor: 'blue'}}>Stream I.T. Consulting Ltd.</Text>
      <Text style={{...styles.text, backgroundColor: 'green'}}>Stream I.T. Consulting Ltd.</Text>
      <Text style={{...styles.text, backgroundColor: 'orange'}}>Stream I.T. Consulting Ltd.</Text>
      <Text style={{...styles.text, backgroundColor: 'purple'}}>Stream I.T. Consulting Ltd.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'purple',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
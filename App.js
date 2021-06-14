import React from 'react'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{
      backgroundColor: '#FF0', 
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch'
      }}>
      <Text style={{
        fontSize: 30, 
        fontWeight: 'bold',
        backgroundColor: 'purple',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
        }}>
          Stream I.T. Consulting Ltd.
        </Text>
      <Text style={{
        fontSize: 30, 
        fontWeight: 'bold',
        backgroundColor: 'green',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
        }}>
          Stream I.T. Consulting Ltd.
        </Text>
      <Text style={{
        fontSize: 30, 
        fontWeight: 'bold',
        backgroundColor: 'white',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
        }}>
          Stream I.T. Consulting Ltd.
        </Text>
      <Text style={{
        fontSize: 30, 
        fontWeight: 'bold',
        backgroundColor: 'blue',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
        }}>
          Stream I.T. Consulting Ltd.
        </Text>
      <Text style={{
        fontSize: 30, 
        fontWeight: 'bold',
        backgroundColor: 'orange',
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
        }}>
          Stream I.T. Consulting Ltd.
        </Text>        
    </View>
  )
}

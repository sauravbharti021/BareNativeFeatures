import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import CommonButton from '../components/CommonButton'
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
  const navigator = useNavigation()

  useEffect(() => {
    Alert.alert("Alert", "No crashes anymore", [{
      text: "yes",
      onPress: () => console.log("Yes pressed")
    }])
  }, [])

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={{ fontSize: 30 }}>
          Access to Camera!
        </Text>
        <View style={styles.buttonContainer}>
          <CommonButton
            style={styles.button}
            title="Grant Access"
            onPress={() => { navigator.navigate('cameraPage') }}
          />
          <CommonButton
            style={styles.button} 
            title="Deny"
            onPress={()=> {
              Alert.alert("Alert", "Please, Grant permission to access Camera" )
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  titleBox: {
    //         flex: 1,
    backgroundColor: 'gray',
    height: 300,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 8
  }
})
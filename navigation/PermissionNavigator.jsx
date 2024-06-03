import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraPageScreen from '../screens/CameraPageScreen'
import CameraScreen from '../screens/CameraScreen'
import Screen from '../screens/Screen';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator()

const PermissionNavigator = () => {
  // const navigator = useNavigation()

  return (
    <Screen>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="camera" 
          component={CameraScreen}
          options={{
            headerShown: true,
            headerTitle: 'Camera'
          }}
        />
        <Stack.Screen name="cameraPage" component={CameraPageScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => (
                navigation.goBack()
              )} >
                <MaterialCommunityIcons name="arrow-left" size={30} />
              </TouchableOpacity>
            ),
            headerShown: true,
            headerTitle: 'Camera Screen'
          })}

        />
      </Stack.Navigator>
    </Screen>
  )
}

export default PermissionNavigator

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'red'
  }
})
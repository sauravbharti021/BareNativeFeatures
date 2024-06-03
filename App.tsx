/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen'
import CameraScreen from './screens/CameraScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PermissionNavigator from './navigation/PermissionNavigator'

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator()

function App(): React.JSX.Element {


  return (
      <NavigationContainer>
        <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        title : "Home",
                        tabBarIcon: (() => <MaterialCommunityIcons name="home" size={30} color="#900" />)
                    }}
                />
                <Tab.Screen name="Camera" component={PermissionNavigator}
                    options={{
                        title : "Camera",
                        tabBarIcon: (() => <Icon name="camera" size={30} color="#900" />),
                        headerShown: false
                    }}
                />
        </Tab.Navigator>
      </NavigationContainer>
//         <Text style={{color: 'black'}}>
//             Hey, testing
//         </Text>
  );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default App;

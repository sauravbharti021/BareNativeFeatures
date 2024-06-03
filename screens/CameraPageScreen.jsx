import { StyleSheet, Text, View, Platform, StatusBar, TouchableWithoutFeedback, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import ProgressBar from '../components/ProgressBar'
import Screen from './Screen'
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome'
import CrashTester from 'react-native-crash-tester';

const CameraPageScreen = () => {
    CrashTester.nativeCrash('Custom message for crash!');
    useEffect(()=> {
        debugger

        let res = fetch('https://jsonplaceholder.typicode.com/todos')
              .then(response => response.json())
              .then(json => {
                
                debugger;
                console.log(json)
                return json
              }).
              catch(err => console.log(err))


    }, [])

    const imageClickHandler = () => {

        ImagePicker.openCamera({
            width: 200,
            height: 250,
            cropping: true,
            multiple: false
        }).then(image => {
            console.log(image)
        }).catch(err => {
            console.log(err)
            Alert.alert("Alert", "Please, grant the camera permission", [{
                text: "Yes",
                onPress: () => {console.log("Button pressed again")}
            }])
        }) 

        console.log("Upload Image")
    }
  return (

    <TouchableWithoutFeedback style={styles.container} onPress={imageClickHandler}>
        <View style={styles.imageContainer}  >

            <MaterialCommunityIcons name="camera" size={40} />
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CameraPageScreen


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        overflow: 'hidden',
        height: 200
    },
    imageContainer: {
        height: 100,
        width: 100,
        backgroundColor: '#d1cfcb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5
    }
})
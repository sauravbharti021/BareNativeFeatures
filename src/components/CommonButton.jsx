import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CommonButton = ({title, style, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={{...styles.container, ...style}}>
            <Text style={{...styles.button, ...style}}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default CommonButton

const styles = StyleSheet.create({
    container:{
        width: '30%',
        backgroundColor: 'dodgerblue',
        cursor: 'pointer'
    },
    button: {
        color: 'white',
        textAlign: 'center',
        borderRadius: 10,
    }
})
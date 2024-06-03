import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import React from 'react'

const Screen = ({style,children}) => {
  return (
    <SafeAreaView style={{ ...styles.screen, ...style}}>
        {children}
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS == 'android' ? 10 : 18,
    }
})
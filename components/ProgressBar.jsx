import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import {AnimatedCircularProgress} from 'react-native-circular-progress' 

const ProgressBar = ({progress = 0}) => {
  return (
    <>
        <AnimatedCircularProgress
            size={350}
            width={30}
            fill={progress}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875"
            arcSweepAngle={180}
            rotation={270}
        />
    </>
  )
}

export default ProgressBar

const styles = StyleSheet.create({})
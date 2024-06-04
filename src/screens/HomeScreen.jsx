import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from '../components/ProgressBar';
import DynamicCarousel from '../components/common/DynamicCarousel';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const currentProgress = 30
  console.log("Entering home screen")
  
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <ProgressBar progress={currentProgress} />
        </View>
        <Text>Reward point - {currentProgress}/100 </Text>
        <View style={{...styles.wrapperCarousel, marginTop: 55, marginHorizontal: 20}}>
          <GestureHandlerRootView>

            <DynamicCarousel />
          </GestureHandlerRootView>
        </View>
    </View> 
  )
} 

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
      overflow: 'hidden',
      height: 200
  },
  wrapperCarousel: {
    
  }
})
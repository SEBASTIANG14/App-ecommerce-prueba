import React, {useState, useRef} from 'react'
import { View, FlatList, Animated} from 'react-native'

import { OnBoardingItem } from '../components/OnBoardingItem'
import slides from '../slides'

export const Home = () => {

    const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View>
        <FlatList 
        data={slides} 
        renderItem={({item}) => <OnBoardingItem item ={item}/>} 
        // horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces = {false}
        // keyExtractor={(item) => item.id}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], { 
            useNativeDriver: false,
        })}
        />
    </View>
  )
}

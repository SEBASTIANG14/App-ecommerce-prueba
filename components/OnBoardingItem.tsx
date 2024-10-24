import React from 'react'
import { View, Text, Image,StyleSheet, useWindowDimensions } from 'react-native'

export const OnBoardingItem = ({item}) => {

    const {width} = useWindowDimensions();

  return (
    <View>
        <Image source={item.image} style= {[styles.image, {width, resizeMode: "contain"}]}></Image>
    
        <View style = {{flex:0.3}}>
            <Text style= {styles.title}> {item.title} </Text>
            <Text style= {styles.description}> {item.description} </Text>
        </View>
    
    </View>
  )
}


const styles = StyleSheet.create({
    container:{

    },
    image: {
        flex: 0.7,
        justifyContent: "center",
    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        color: "#193d8a",
        textAlign: "center",
    },
    description: {
        fontWeight: "300",
        color: "#62656b",
        textAlign: "center",
        paddingHorizontal: 64,
    }

});
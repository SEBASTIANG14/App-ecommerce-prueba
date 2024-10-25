import { View, Text, Button, StyleSheet, SafeAreaView, Image, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import { MenuSup } from '../components/MenuSup'

export const Carrito = () => {
    const handlePress = () => {
        console.log("Botón presionado");
        // Aquí puedes agregar la funcionalidad que deseas que ocurra al presionar el botón
      };
  return (
    <ImageBackground
     source={require('../src/img/goku.jpg')}
     style={styles.imageBack}
    >
    <SafeAreaView style = {styles.container}>

    <View style = {styles.textContainer}>
        <Image
            source={require('../src/img/carrito.png')}
            style={styles.image}
            ></Image>
    <Text style = {styles.text}>Carrito</Text>
    </View>
          
      <MenuSup/>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={styles.btntext}>PAGAR</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
        
    },
    text: {
        flex: 2,
        marginTop: 40,
        marginLeft: 10,
        fontSize: 24
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: "10%",
        width: "100%",
        padding: 10
        
    },
    image: {
        width:25,
        height: 25,
        marginRight: 10,
        marginTop: 40,
        marginLeft: 10
    },
    imageBack: {
        flex: 1,
        width:500,
        height: 1000,

    },
    btn: {
        width:100,
        height: 50,
        flexDirection: "row",
        backgroundColor:"blue",
        alignItems: "center",
        justifyContent:"center",
        marginTop:70,
        marginLeft: 180
    },
    btntext: {
        fontSize: 14,
        color: "white",
        
    }
})

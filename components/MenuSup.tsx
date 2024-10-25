import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'

export const MenuSup = () => {
    const handleOptionPress = (option) => {
        console.log(`Opción seleccionada: ${option}`);
       
      };

      const styles = StyleSheet.create({

        menuContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop:10, 
            padding: 15,
            backgroundColor: "black",
            borderBottomWidth: 1,
            borderColor: "blue"
        },

        option:{
            flex: 1,
            alignItems: "center",
            
        },

        optionText: {
            fontSize: 20,
            fontFamily: "sans-serif",
            color: "white"
        }
      })

      return(
        <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => handleOptionPress('pago')} style={styles.option}>
        <Text style={styles.optionText}>Pagar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress('Opción 2')} style={styles.option}>
        <Text style={styles.optionText}>Agregar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress('salir')} style={styles.option}>
        <Text style={styles.optionText}>Salir</Text>
      </TouchableOpacity>
    </View>
      )


      
    
}

